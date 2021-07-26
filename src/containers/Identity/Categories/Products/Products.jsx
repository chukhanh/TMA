import React, { useState } from "react";
import style from "./Products.module.scss";
import "antd/dist/antd.css";
import { BrowserRouter as Link, Route } from "react-router-dom";
import ProductInfo from "../ProductsInfo/ProductInfo";
import { Modal, Button } from "antd";
import {
  deleteProduct,
  postProduct,
  putProduct,
  updateProduct,
} from "../../../../services/api/ProductServices";

const Products = ({ Id, Image, Type, Name, Price, Ranking, Favorite }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [update, setUpdate] = useState({
    id : 0,
    productName : '',
    price : '',
    ranking : '',
    favorite : 'false',
    productImage : '',
    productType : '',
    ram : '',
    ssd : '',
    display : '',
    cpu : '',
    gpu : '',
    diff : '',
  });

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onUserClick = (e) => {
    e.preventDefault();
    this.props.onUserClickBuy(Id);
  };

  const onSellerDelete = () => {
    deleteProduct(Id);
    setIsModalVisible(false);
  };

  const onUserUpdate = (updateProduct) => {
    console.log(updateProduct);
    let { updateType, updateName, updatePrice } = updateProduct;
    console.log(updateType);
    setUpdate({
      id : Id,
      productName : updateName,
      price : updatePrice,
      ranking : '6',
      favorite : 'false',
      productImage : "https://driver.gianhangvn.com/file/macbook-pro-m1-2020-1734951f1442.PNG",
      productType : updateType,
      ram: "18 GB",
      ssd: " 2 TB",
      display: "15.3-inch Retina (2560 x 1600)",
      cpu: "Apple M2",
      gpu: "9-core",
      diff: "Up to 21 hours battery life",
    });
    console.log(JSON.stringify(update));
  };

  const onUserPut = () => {
    // putProduct(update.id, update);
    updateProduct(update.Id, update );
    console.log(updateProduct(update.id, update ));

    setIsModalVisible(false);
  };

  const onUserpost = () => {
    postProduct(update);
    setIsModalVisible(false);
  }
  console.log(Id);
  return (
    <div className={style.productItem} Id={Id}>
      <div className={style.productImage}>
        <img src={Image} alt="" srcset="" />
      </div>
      <h2 className={style.productName}>{Name}</h2>
      <div className={style.bottom}>
        <span className={style.productPrice}>{Price}$</span>
        {Type == "Client" ? (
          <form onSubmit={this.onUserClick}>
            <button type="submit">BUY</button>
          </form>
        ) : (
          ""
        )}
        <Button type="primary" onClick={showModal}>
          View
        </Button>
        <Modal
          title={Name}
          width={1000}
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[
            <Button key="back" onClick={handleCancel}>
              Cancel
            </Button>,
            <Button key="delete" type="" onClick={onSellerDelete}>
              Delete
            </Button>,
            <Button
              key="submit"
              type="primary"
              // loading={loading}
              onClick={onUserPut}
            >
              Edit
            </Button>,
            <Button
              key="submit"
              type="primary"
              // loading={loading}
              onClick={onUserpost}
            >
              Create
            </Button>,
          ]}
        >
          <ProductInfo
            idInfo={Id}
            imageInfo={Image}
            typeInfo={Type}
            nameInfo={Name}
            priceInfo={Price}
            rankingInfo={Ranking}
            favoriteInfo={Favorite}
            onHandlerUserUpdate={onUserUpdate}
          />
        </Modal>
      </div>
    </div>
  );
};

export default Products;
