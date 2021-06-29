import React, { useState } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Rate } from "antd";
import { HeartOutlined } from "@ant-design/icons";
import style from "./CategoryRating.module.scss";

const desc = ["terrible", "bad", "normal", "good", "wonderful"];

class CategoryRating extends React.Component {
  state = {
    value: -1,
  };

  handleChange = (value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    return (
      <div className={style.categoryRating}>
        <h2 className={style.title}>Rating</h2>
        <div className={style.rate}>
          <Rate tooltips={desc} onChange={this.handleChange} value={value} />
          {value ? <div className="ant-rate-text">{desc[value - 1]}</div> : ""}
        </div>
      </div>
    );
  }
}

export default CategoryRating;
