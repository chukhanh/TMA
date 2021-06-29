import React, { Component } from "react";
import style from "./CategoryMenu.module.scss";
import CategoryBrands from "./CategoryBrands/CategoryBrands";
import CategoryTotal from "./CategoryTotal/CategoryTotal";
import CategoryRating from "./CategoryRating/CategoryRating";
import CategoryPrice from "./CategoryPrice/CategoryPrice";

export default class CategoryMenu extends Component {
  render() {
    let array = this.props.productItem.map((element) => element.Type);
    let priceArray = this.props.productItem.map((element) => element.Price);
    let type = () => {
      return Array.from(new Set(array))
    }
    let price = () => {
      return Array.from(new Set(priceArray))
    }

    let newArrayPrice = price().sort((a,b)=> a-b);
    console.log(newArrayPrice);

    return (
      <div className={style.categoryMenu}>
        <CategoryTotal productType={array}/>
        <CategoryBrands type={type()}/>
        <CategoryRating/>
        <CategoryPrice newArrayPrice={newArrayPrice}/>
      </div>
    );
  }
}
