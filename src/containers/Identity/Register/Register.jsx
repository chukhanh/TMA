import React, { Component } from "react";
import {
  FormCheckBox,
  FormInput,
  FormSelect,
} from "../../../components/form/form";
import ReactDOM from "react-dom";
import style from "./Register.module.scss";
import RegisterSVG from "../../img/register.svg";
import * as Yup from "yup";
import { Formik, Form, useField } from "formik";
import { Link } from "react-router-dom";

export default class Register extends Component {
  render() {
    return (
      <div className={style.registerIdentity}>
        <div className={style.register}>
          <h1>SIGN UP</h1>
          <div className={style.registerForm}>
            <Formik
              initialValues={{
                email: "",
                password: "",
                confirmPassword: "",
                acceptedTerms: false, // added for our checkbox
                clientType: "", // added for our select
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
                clientType: Yup.string()
                  // specify the set of valid values for job type
                  // @see http://bit.ly/yup-mixed-oneOf
                  .oneOf(["Client", "Seller"], "Invalid Client Type")
                  .required("Required"),
              })}
              onSubmit={async (values, { setSubmitting }) => {
                await new Promise((r) => setTimeout(r, 500));
                console.log(values);
                setSubmitting(false);
              }}
            >
              <Form>
                <FormInput
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="TMA@formik.com"
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
                <FormSelect label="Client Type" name="clientType">
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
