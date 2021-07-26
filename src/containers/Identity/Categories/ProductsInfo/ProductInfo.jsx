import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import style from "./ProudctInfo.module.scss";
import * as Yup from "yup";
import { FormInput, FormSelect } from "../../../../components/form/form";
import { Image } from "antd";
import { putProduct } from "../../../../services/api/ProductServices";
const ProductInfo = ({
  idInfo,
  imageInfo,
  typeInfo,
  nameInfo,
  priceInfo,
  rankingInfo,
  favoriteInfo,
  onHandlerUserUpdate
}) => {

    
  return (
    <div className={style.productInfo}>
      <div className={style.productImage}>
        <Image width={200} src={imageInfo} />
      </div>
      <Formik
        initialValues={{
          updateType: "",
          updateName: "",
          updatePrice: ""
        }}
        validationSchema={Yup.object({
          updateType: Yup.string()
            .oneOf([
              "Macbook",
              "Asus",
              "HP",
              "Lenovo",
              "Acer",
              "Dell",
              "LG",
              "MSI",
            ])
            .required("Required"),

          updateName: Yup.string()
            .min(8, "Must be 8 characters or less"),
          updatePrice: Yup.string()
            .min(2, "Must be 2 characters or less"),
        })}
        onSubmit={async (values, { setSubmitting, resetForm  }) => {
          await new Promise((r) => setTimeout(r, 500));
          setSubmitting(false);
          console.log(values);
        //   resetForm(values);
          onHandlerUserUpdate(values);
        }}
      >
        <Form>
          <FormInput
            label={typeInfo}
            name="updateName"
            type="text"
            placeholder={nameInfo}
          />
          <FormInput
            label="Price"
            name="updatePrice"
            type="text"
            placeholder={priceInfo}
          />
          <FormSelect label="Type" name="updateType" > 
            <option value="">{typeInfo}</option>
            <option value="Macbook">Macbook</option>
            <option value="Asus">Asus</option>
            <option value="HP">HP</option>
            <option value="Lenovo">Lenovo</option>
            <option value="Acer">Acer</option>
            <option value="Dell">Dell</option>
            <option value="LG">LG</option> 
            <option value="MSI">MSI</option>
          </FormSelect>
          <button type="submit">Update</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ProductInfo;
