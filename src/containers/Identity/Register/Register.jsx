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
import { SignUp } from "../../../services/api/signUp";
import { checkObject, convertObject } from "../../../utils/object";
import { registerScuess, error } from "../../../utils/messages";

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      acceptedTerms: false, // added for our checkbox
      type: "",
    };
  }

  render() {
    return (
      <div className={style.registerIdentity}>
        <div className={style.register}>
          <h1>SIGN UP</h1>
          <div className={style.registerForm}>
            <Formik
              initialValues={this.state}
              validate={(values) => {
                let error = {};
                if (checkObject(convertObject(values.email), this.props.data) === true)
                 {error.email = "The email do exist";}
                return error;
              }}
              validationSchema={Yup.object({
                email: Yup.string()
                  .email("Invalid email addresss")
                  .required("Required"),
                password: Yup.string()
                  .min(8, "Minimum 8 characters")
                  .required("Required!"),
                confirmPassword: Yup.string()
                  .required("Required!")
                  .min(8, "Minimum 8 characters")
                  .when("password", {
                    is: (val) => (val && val.length > 0 ? true : false),
                    then: Yup.string().oneOf(
                      [Yup.ref("password")],
                      "Both password need to be the same"
                    ),
                  }),
                acceptedTerms: Yup.boolean()
                  .required("Required")
                  .oneOf([true], "You must accept the terms and conditions."),
                type: Yup.string()
                  // specify the set of valid values for job type
                  // @see http://bit.ly/yup-mixed-oneOf
                  .oneOf(["Client", "Seller"], "Invalid Client Type")
                  .required("Required"),
              })}
              onSubmit={async (values, { setSubmitting }) => {
                await new Promise((r) => setTimeout(r, 500));
                console.log(values);
                setSubmitting(false);
                SignUp(values);
                // console.log(convertObject(values.email, Object.keys(values.email)));
                console.log(Object.keys(values.email));
            }}
            >
              {({ values }) => (
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
                <FormSelect label="Type" name="type">
                  <option value="">Select A Client Type</option>
                  <option value="Client">Client</option>
                  <option value="Seller">Seller</option>
                </FormSelect>
                <FormCheckBox name="acceptedTerms">
                  I accept the terms and conditions
                </FormCheckBox>
                <div className={style.btnSignUP}>
                  <button type="submit"
                  onClick={
                    checkObject(convertObject(values.email), this.props.data) === false 
                    ? registerScuess
                    : error
                  }
                  >
                    {checkObject(convertObject(values.email), this.props.data) === false 
                     ? <Link to="./login" style={{ color: "#fff" }}>REGISTER</Link>
                     : <div>REGISTER</div>
                  }</button>
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
