/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState, useEffect } from "react";
import { FormInput } from "../../../components/form/form";
import { Formik, Form } from "formik";
import { BrowserRouter as Link, useHistory } from "react-router-dom";
import { checkObject } from "../../../utils/object";
import "antd/dist/antd.css";
import style from "./Login.module.scss";
import log from "../../img/log.svg";
import * as Yup from "yup";
import { success, LoginError } from "../../../utils/messages";
import { debounce } from "../../../utils/debounce";
import { SignIn } from "../../../services/api/SignIN";
import CookiesServices from "../../../services/cookies-services";
// import { history } from "../../../services/api";


// import signUp
const Login = ({ data }) => {
  const [initialValues, setInitialValues] = useState({
    form: { email: "", password: "" },
    check: false,
  });

  useEffect(() => {
    const token = CookiesServices.getCookies('token');
    if (token) history.push('/staff');
    else history.push('/identity/login');
  }, []);

  let history = useHistory();
  // const userHandleHistory = async (values, path) => {
  //   if (checkObject(values, data) === true ){
  //     debounce(() => success(values.email), 500);
  //     history.push(path);
  //     SignIn(data);
  //   } else {
  //     debounce(() => LoginError(values, data, values.email), 500);
  //   }
  // };

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
              initialValues={initialValues.form}
              validationSchema={Yup.object({
                email: Yup.string().required("Required"),
                password: Yup.string()
                  .min(8, "Minimum 8 characters")
                  .required("Required!")
                  .matches(/(?=.*[0-9])/, "Password must contain a number."),
              })}
              validate={(values) => {
                const EmailValidator =
                  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
                let error = {};
                if (!EmailValidator.test(values.email))
                  error.email = "Invalid email address.";

                return error;
              }}
              onSubmit={async (values, { setSubmitting }) => {
                await new Promise((r) => setTimeout(r, 500));
                setSubmitting(false);
                setInitialValues({
                  check: checkObject(values, data),
                });
                // console.log(this.validat e(values.error.email));
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
                    <button
                      type="submit"
                      // onClick={}
                    >
                      LOGIN
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
