/* eslint-disable react/jsx-no-comment-textnodes */
import React, { Component } from "react";
import { FormInput } from "../../../components/form/form";
import style from "./Login.module.scss";
import log from "../../img/log.svg";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";

class Login extends Component {
  render() {
    return (
      <div className={style.loginIdentity}>
        <div className={style.loginLeft}>
          <div className={style.title}>
            <h1>New Here ?</h1>
            <h2>Sign out of Past.. Login to the new!</h2>
            <div className={style.btnSignUp}>
              <Link to="./register">
                <button>SIGN UP</button>
              </Link>
            </div>
          </div>
        </div>
        <div className={style.footer}>
          <img src={log} alt="" />
        </div>
        <div className={style.loginRight}>
          <div className={style.LoginForm}>
            <h1>SIGN IN</h1>
            <div className={style.LoginFormik}>
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                }}
                validationSchema={Yup.object({
                  email: Yup.string()
                    .email("Invalid email addresss`")
                    .required("Required"),
                  password: Yup.string()
                    .min(8, "Minimum 8 characters")
                    .required("Required!"),
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
                  <div className={style.btnLogin}>
                    <button type="submit">LOGIN</button>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
