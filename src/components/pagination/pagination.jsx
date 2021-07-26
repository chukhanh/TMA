import React, { Component } from "react";
import style from "./pagiantion.module.scss";
import "antd/dist/antd.css";
import Products from "../../containers/Identity/Categories/Products/Products";
// import { findByTemplate } from "../../utils/object";
import { Order } from "../../services/localStorage/setLocalStorage";
import { Menu, Dropdown } from "antd";

import DrawerForm from "./Drawer/Drawer";
import { deleteProduct } from "../../services/api/ProductServices";

export default class Pagination extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: 1,
      todosPerPage: 6,
      upperPageBound: 3,
      lowerPageBound: 0,
      isPrevBtnActive: "disabled",
      isNextBtnActive: "",
      pageBound: 3,
      oder: {
        ProductID: "",
      },
      visible: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.btnDecrementClick = this.btnDecrementClick.bind(this);
    this.btnIncrementClick = this.btnIncrementClick.bind(this);
    this.btnNextClick = this.btnNextClick.bind(this);
    this.btnPrevClick = this.btnPrevClick.bind(this);
    this.onUserClickBuy = this.onUserClickBuy.bind(this);
    // this.componentDidMount = this.componentDidMount.bind(this);
    this.setPrevAndNextBtnClass = this.setPrevAndNextBtnClass.bind(this);
    // this.showDrawer = this.showDrawer.bind(this);
    // this.onClose = this.onClose.bind(this);
  }

  handleClick(event) {
    let listid = Number(event.target.id);
    this.setState({
      currentPage: listid,
    });
    this.setPrevAndNextBtnClass(listid);
  }
  setPrevAndNextBtnClass(listid) {
    let totalPage = Math.ceil(
      this.props.productItem.length / this.state.todosPerPage
    );
    this.setState({ isNextBtnActive: "disabled" });
    this.setState({ isPrevBtnActive: "disabled" });
    if (totalPage === listid && totalPage > 1) {
      this.setState({ isPrevBtnActive: "" });
    } else if (listid === 1 && totalPage > 1) {
      this.setState({ isNextBtnActive: "" });
    } else if (totalPage > 1) {
      this.setState({ isNextBtnActive: "" });
      this.setState({ isPrevBtnActive: "" });
    }
  }
  btnIncrementClick() {
    this.setState({
      upperPageBound: this.state.upperPageBound + this.state.pageBound,
    });
    this.setState({
      lowerPageBound: this.state.lowerPageBound + this.state.pageBound,
    });
    let listid = this.state.upperPageBound + 1;
    this.setState({ currentPage: listid });
    this.setPrevAndNextBtnClass(listid);
  }
  btnDecrementClick() {
    this.setState({
      upperPageBound: this.state.upperPageBound - this.state.pageBound,
    });
    this.setState({
      lowerPageBound: this.state.lowerPageBound - this.state.pageBound,
    });
    let listid = this.state.upperPageBound - this.state.pageBound;
    this.setState({ currentPage: listid });
    this.setPrevAndNextBtnClass(listid);
  }
  btnPrevClick() {
    if ((this.state.currentPage - 1) % this.state.pageBound === 0) {
      this.setState({
        upperPageBound: this.state.upperPageBound - this.state.pageBound,
      });
      this.setState({
        lowerPageBound: this.state.lowerPageBound - this.state.pageBound,
      });
    }
    let listid = this.state.currentPage - 1;
    this.setState({ currentPage: listid });
    this.setPrevAndNextBtnClass(listid);
  }
  btnNextClick() {
    if (this.state.currentPage + 1 > this.state.upperPageBound) {
      this.setState({
        upperPageBound: this.state.upperPageBound + this.state.pageBound,
      });
      this.setState({
        lowerPageBound: this.state.lowerPageBound + this.state.pageBound,
      });
    }
    let listid = this.state.currentPage + 1;
    this.setState({ currentPage: listid });
    this.setPrevAndNextBtnClass(listid);
  }

  onUserClickBuy = (ID) => {
    var arryOrder = [];
    var existing = this.props.order;
    // existing = existing ? existing.split(",") : [];
    arryOrder.push(ID);
    // existing.push(ID);
    Order(arryOrder);
  };

  userHanldeDeleteProudct = (id) => {
    deleteProduct(id);
  };
  render() {
    const type = this.props.value.map((el) => el.productType);
    const todos = this.props.productItem;
    const {
      currentPage,
      todosPerPage,
      upperPageBound,
      lowerPageBound,
      isPrevBtnActive,
      isNextBtnActive,
    } = this.state;
    // Logic for displaying current todos
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

    const renderTodos = currentTodos.map((todo, index) => {
      return (
        <div className={style.category}>
          <Products
            // check={type}
            key={index}
            Id={todo.id}
            Name={todo.productName}
            // Content={todo.content}
            Price={todo.price}
            Ranking={todo.ranking}
            Favorite={todo.favorite}
            Image={todo.productImage}
            Type={todo.productType}
            onUserClickBuy={this.onUserClickBuy}
          />
        </div>
        // </Dropdown>
      );
    });

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
      pageNumbers.push(i);
    }
    const renderPageNumbers = pageNumbers.map((number) => {
      if (number === 1 && currentPage === 1) {
        return (
          <span key={number} className="active" id={number}>
            <a href="#" id={number} onClick={this.handleClick}>
              {number}
            </a>
          </span>
        );
      } else if (number < upperPageBound + 1 && number > lowerPageBound) {
        return (
          <span key={number} id={number}>
            <a href="#" id={number} onClick={this.handleClick}>
              {number}
            </a>
          </span>
        );
      }
    });
    let pageIncrementBtn = null;
    if (pageNumbers.length > upperPageBound) {
      pageIncrementBtn = (
        <span className="">
          <a href="#" onClick={this.btnIncrementClick}>
            {" "}
            &hellip;{" "}
          </a>
        </span>
      );
    }
    let pageDecrementBtn = null;
    if (lowerPageBound >= 1) {
      pageDecrementBtn = (
        <span className="">
          <a href="#" onClick={this.btnDecrementClick}>
            {" "}
            &hellip;{" "}
          </a>
        </span>
      );
    }
    let renderPrevBtn = null;
    if (isPrevBtnActive === "disabled") {
      renderPrevBtn = (
        <span className={isPrevBtnActive}>
          <span id="btnPrev"> Prev </span>
        </span>
      );
    } else {
      renderPrevBtn = (
        <span className={isPrevBtnActive}>
          <a href="#" id="btnPrev" onClick={this.btnPrevClick}>
            {" "}
            Prev{" "}
          </a>
        </span>
      );
    }
    let renderNextBtn = null;
    if (isNextBtnActive === "disabled") {
      renderNextBtn = (
        <span className={isNextBtnActive}>
          <span id="btnNext"> Next </span>
        </span>
      );
    } else {
      renderNextBtn = (
        <span className={isNextBtnActive}>
          <a href="#" id="btnNext" onClick={this.btnNextClick}>
            {" "}
            Next{" "}
          </a>
        </span>
      );
    }
  
    return (
      <div className={style.bodyProduct}>
        <span className={style.pagination}>
          {renderPrevBtn}
          {pageDecrementBtn}
          {renderPageNumbers}
          {pageIncrementBtn}
          {renderNextBtn}
        </span>
        <div className={style.renderProduct}>{renderTodos}</div>
      </div>
    );
  }
}
