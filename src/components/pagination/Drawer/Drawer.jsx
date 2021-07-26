import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import {
  Drawer,
  Button,
} from "antd";
import * as Yup from "yup";
import { FormInput } from "../../form/form";
import style from './Drawer.module.scss';
import { Formik, Form } from "formik";

export default class DrawerForm extends React.Component {
  state = { 
      visible: false,
    formProduct:{
        Name: '',
        Content : '',
        Price: '',
        Type: '',
    }
};

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };



  render() {
    return (
      <>
        <Button onClick={this.showDrawer}>{this.props.label}</Button>
        <Drawer
          title="Create a new Product"
          width={720}
          onClose={this.onClose}
          visible={this.state.visible}
          bodyStyle={{ paddingBottom: 80 }}
          footer={
            <div
              style={{
                textAlign: "right",
              }}
            >
              <Button onClick={this.onClose} style={{ marginRight: 8 }}>
                Cancel
              </Button>
              <button type="submit">Submit</button>
            </div>
          }
        >
        <div className={style.formikDrawerForm}>
        <Formik
                initialValues={this.state.formProduct}
                validationSchema={Yup.object({
                    Name: Yup.string()
                        // .Name("Invalid email addresss`")
                        .required("Required"),
                    Content: Yup.string(),
                    Price: Yup.string()
                        // .Price("Invalid Price addresss")
                        .required("Required"),
                    Type: Yup.string()
                        // .Type("Invalid email addresss")
                        .required("Required"),
                    // .min(8, "Minimum 8 characters")
                    // .required("Required!"),
                })}
                onSubmit={async (
                  values,
                  {
                    setSubmitting,
                    handleSubmit,
                    setValues,
                    resetForm,
                    isValid,
                    dirty,
                  }
                ) => {
                  this.setState({
                    formProduct: {
                        Name: values.Name,
                        Content : values.Content,
                        Price: values.Price,
                        Type: values.Type,
                    },
                  });
                  console.log(this.state.formProduct);
                  if (isValid === false) {
                    // error();
                  } else
                    setTimeout(() => {
                      setSubmitting(false);
                    //   SignIn(
                    //     findByTemplate(this.props.data, this.state.accountLogin)
                    //   );
                      resetForm();
                    //   success(values.email);
                    //   this.props.history.push("./category");
                    }, 1000);
                
                }}
              >
                {({ values }) => (
                  <Form>
                    <FormInput
                      label="Product"
                      name="Product"
                      type="Product"
                      placeholder="Macbook"
                    />
                    <FormInput
                      label="Type"
                      name="Type"
                      type="Type"
                      placeholder="MacBook"
                    />
                    <FormInput
                      label="Price"
                      name="Price"
                      type="Price"
                      placeholder="1000$"
                    />
                    <FormInput
                      label="Content"
                      name="Content"
                      type="Content"
                    />
                    
                  </Form>
                )}
              </Formik>
        </div>
        </Drawer>
      </>
    );
  }
}
