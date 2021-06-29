import style from "./Category.module.scss";
import React from "react";
import "antd/dist/antd.css";
import { Slider } from "antd";
import { FrownOutlined, SmileOutlined } from "@ant-design/icons";
class CategoryPrice extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (value) => {
    this.setState({ value });
  };

  render() {
    // const { max, min } = this.props;
    // const price = this.props.newArrayPrice.split(',').map(x=>+x);
    let price = this.props.newArrayPrice.map(function (item) {
      return parseInt(item, 10);
    });
    let max = Math.max(price);
    console.log(max);
    let min = Math.min(price);
    const { value } = this.state;
    // const mid = ((max - min) / 2).toFixed(5);
    return (
      <div className={style.categoryPrice}>
        <h2 className={style.title}>Price</h2>
        <div className={style.price}>
          <Slider {...this.props} onChange={this.handleChange} value={value} />

        </div>
      </div>
    );
  }
}

export default CategoryPrice;
