/* eslint-disable react/jsx-no-comment-textnodes */
import React, { Component } from "react";
import {
  formCheckBox,
  formInput,
  formSelect,
} from "../../../components/form/form";
import style from "./Login.module.scss";
import log from "../../img/log.svg";

class Login extends Component {
  render() {
    return (
      <div className={style.loginIdentity}>
        <div className={style.loginLeft}>
          <div className={style.title}>
            <h1>New Here ?</h1>
            <h2>If you don't have an account, clicking sign up abow.</h2>
            <div className={style.btnSignUp}>
              <button>SIGN UP</button>
            </div>
          </div>
        </div>
          <div className={style.footer}>
            <img src={log} />
          </div>
        <div className={style.loginFormik}></div>
      </div>
    );
  }
}

export default Login;
