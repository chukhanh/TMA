import React, { Component } from "react";
import style from "./CategoryMenu.module.scss";
import CategoryBrands from "./CategoryBrands/CategoryBrands";
import CategoryTotal from "./CategoryTotal/CategoryTotal";
import CategoryRating from "./CategoryRating/CategoryRating";
import CategoryPrice from "./CategoryPrice/CategoryPrice";

export default class CategoryMenu extends Component {
  render() {
    let typeArray = this.props.productItem.map((element) => element.productType);
    let priceArray = this.props.productItem.map((element) => element.price);

    let setType = (arr) => {
      return Array.from(new Set(arr));
    };
    const type = new Map([...typeArray].map(
      x => [x, typeArray.filter(y => y === x).length]
  ));

    return (
      <div className={style.categoryMenu}>
        <CategoryTotal productType={type} productTotal = {typeArray} typeArray={setType(typeArray)}/>
        <CategoryBrands typeArray={setType(typeArray)}/>
        <CategoryRating />
        <CategoryPrice newArrayPrice={setType(priceArray)} />
      </div>
    );
  }
}
