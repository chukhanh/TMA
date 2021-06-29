import React from "react";
import ReactDOM from "react-dom";
import { Formik, Field, Form } from "formik";
import style from "./CategoryBrands.module.scss";

const CategoryBrands = ({ type }) => {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  return (
    <div className={style.categoryBrands}>
      <h2 className={style.title}>Brands</h2>
      <Formik
        initialValues={{
          checked: type,
        }}
        onChange={async (values) => {
          await sleep(500);
          // alert(JSON.stringify(values.checked, null, 2));
        }}
      >
        {({ values }) => (
          <Form className={style.form}>
            {type.map((el) => {
              return (
                <label className={style.label}>
                  <Field type="checkbox" name="checked" value={el} />
                  <span>{el}</span>
                </label>
              );
            })}

            {/* <button type="submit">Submit</button> */}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CategoryBrands;
