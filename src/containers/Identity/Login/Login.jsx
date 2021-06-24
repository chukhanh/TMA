/* eslint-disable react/jsx-no-comment-textnodes */
import React, { Component } from "react";
import { FormInput } from "../../../components/form/form";
import style from "./Login.module.scss";
import log from "../../img/log.svg";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import { checkObject, convertObject, findByTemplate } from "../../../utils/object";
import { SignIn } from "../../../services/api/SignIN";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: { email: "", password: "" },
      check: false,
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
                initialValues={this.state.form}
                validate={(values) => {
                  let error = {};
                  if (
                    checkObject(
                      convertObject(values.email),
                      this.props.data
                    ) === false
                  ) {
                    error.email = "The email doesn't exist";
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
                })}
                onSubmit={async (values, { setSubmitting}) => {
                  await new Promise((r) => setTimeout(r, 500));
                  console.log(values);
                  setSubmitting(false);
                  this.setState({
                    check: checkObject(values, this.props.data),
                  });
                  //
                  SignIn(findByTemplate(this.props.data, values));
                  this.state.check
                    ? this.props.history.push("./category")
                    : this.props.history.push("./login");
                  // actions.resetForm();  
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
