/* eslint-disable react/jsx-no-comment-textnodes */
import React, { Component } from "react";
import { FormInput } from "../../../components/form/form";
import style from "./Login.module.scss";
import log from "../../img/log.svg";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import { findByTemplate } from "../../../utils/object";
import { SignIn } from "../../../services/api/SignIN";
import { error, success } from "../../../utils/messages";


class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      accountLogin: { email: "", password: "" },
    };
  }

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
                initialValues={this.state.accountLogin}
                validate={(values) => {
                  let error = {};
                  if (this.props.data !== undefined)
                    this.props.data.map((value) => {
                      if (value.email !== values.email)
                        error.email = "The email doesn't exist";
                    });

                  return error;
                }}
                validationSchema={Yup.object({
                  email: Yup.string()
                    .email("Invalid email addresss`")
                    .required("Required"),
                  password: Yup.string()
                    .min(8, "Minimum 8 characters")
                    .required("Required!"),
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
                    accountLogin: {
                      email: values.email,
                      password: values.password,
                    },
                  });
                  if (isValid === false) {
                    error();
                  } else
                  setTimeout(() => {
                    setSubmitting(false);
                    SignIn(
                      findByTemplate(this.props.data, this.state.accountLogin)
                    );
                    resetForm();
                    success(values.email);
                    this.props.history.push("./category");
                  }, 1000);
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
                    <div className={style.btnLogin}>
                      <button type="submit">LOGIN</button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
