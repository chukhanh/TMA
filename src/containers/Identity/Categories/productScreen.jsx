import React, { Component } from "react";
import CategoryMenu from "../../../components/CategoryMenu/CategoryMenu";
import Header from "../../../components/Header/Header";
import Pagination from "../../../components/pagination/pagination";
import style from "./productScreen.module.scss";
// import Search from "../../../components/Search/Search";
const ProductScreen = ({
  history,
  useLocalStorage,
  product
}) => {
  let value, order;
  [value] = useLocalStorage('accountLoginInfo');
  console.log(product);
  console.log(value);
  
  [order] = useLocalStorage('Order');
  return (
    <div className={style.ProductScreen}>
      <div className={style.header}>
        <Header
          history={history}
          useLocalStorage={useLocalStorage}
        />
      </div>
      <div className={style.body}>
        <CategoryMenu productItem={product} />
        <div className={style.product}>
          <Pagination
            useLocalStorage={useLocalStorage}
            productItem={product}
            value = {value}
            order = {order}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
