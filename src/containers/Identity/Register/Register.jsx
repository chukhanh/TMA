import React, { Component } from "react";
import {
  FormCheckBox,
  FormInput,
  FormSelect,
} from "../../../components/form/form";
import style from "./Register.module.scss";
import RegisterSVG from "../../img/register.svg";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import { registerScuess, error } from "../../../utils/messages";
import { SignUp } from "../../../services/api/SignUp";
// import {findByTemplate} from "../../../utils/object";
export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        email: "",
        password: "",
        confirmPassword: "",
        acceptedTerms: false, // added for our checkbox
        type: "",
      },
      account: {
        email: "",
        password: "",
        type: "",
      },
    };

  }


  render() {
    var array = [];

    for (let i = 0; i < this.props.data.length; i++) {
      array.push(this.props.data[i].email);
    }
    return (
      <div className={style.registerIdentity}>
        <div className={style.register}>
          <h1>SIGN UP</h1>
          <div className={style.registerForm}>
            <Formik
              initialValues={this.state.form}
              validate={(values) => {
                let error = {};
                if (this.props.data !== undefined) {
                  for(let i=0; i < array.length; i++){
                    if(array[i] === values.email) error.email = "The email does exist";
                  }
                }
                return error;
              }}
              validationSchema={Yup.object({
                email: Yup.string()
                  .email("Invalid email addresss`")
                  .required("Required"),
                password: Yup.string()
                  .min(8, "Minimum 8 characters")
                  .required("Required!"),
                confirmPassword: Yup.string()
                  .min(8, "Minimum 8 characters")
                  .required("Required!"),
                acceptedTerms: Yup.boolean()
                  .required("Required")
                  .oneOf([true], "You must accept the terms and conditions."),
                type: Yup.string()

                  .oneOf(["Client", "Seller"], "Invalid Client Type")
                  .required("Required"),
              })}
              onSubmit={async (
                values,
                { setSubmitting, handleSubmit, setValues, resetForm, isValid }
              ) => {
                this.setState({
                  account: {
                    email: values.email,
                    password: values.password,
                    type: values.type,
                  },
                });

                if (isValid === false) {
                  error();
                } else
                  setTimeout(() => {
                    setSubmitting(false);
                    SignUp(this.state.account);
                    resetForm();
                    registerScuess();
                    this.props.history.push("./login");
                  }, 1000);
              }}
            >
              {({ values, handleChange }) => (
                <Form noValidate>
                  <FormInput
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="TMA@formik.com"
                    // handleChange={handleChange}
                  />
                  <FormInput
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="Your Password"
                  />
                  <FormInput
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    placeholder="Your Confirm Password"
                  />
                  <FormSelect label="Client Type" name="type">
                    <option value="">Select A Client Type</option>
                    <option value="Client">Client</option>
                    <option value="Seller">Seller</option>
                  </FormSelect>
                  <FormCheckBox name="acceptedTerms">
                    I accept the terms and conditions
                  </FormCheckBox>
                  <div className={style.btnSignUP}>
                    <button type="submit">RESIGTER</button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
        <div className={style.registerBackground}>
          <div className={style.title}>
            <h1>One of Us ?</h1>
            <h2>Sign out of Past.. Login to the new!</h2>
            <div className={style.btnSignIn}>
              <Link to="./login">
                <button>SIGN IN</button>
              </Link>
            </div>
          </div>
        </div>
        <div className={style.footer}>
          <img src={RegisterSVG} alt="" />
        </div>
      </div>
    );
  }
}
