import React, { Component } from "react";
import CategoryMenu from "../../../components/CategoryMenu/CategoryMenu";
import Header from "../../../components/Header/Header";

import style from "./productScreen.module.scss";
// import Search from "../../../components/Search/Search";
export default class ProductScreen extends Component {
  render() {
    return (
      <div className={style.ProductScreen}>
        <div className={style.header}>
          <Header
            history={this.props.history}
            useLocalStorage={this.props.useLocalStorage}
          />
        </div>
        <div className={style.body}>
        <CategoryMenu productItem={this.props.product}/>
        </div>
      </div>
    );
  }
}
