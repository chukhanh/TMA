/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import Logo from "../Logo/Logo";
import "./Header.scss";
import { Menu, Dropdown } from "antd";
import { UserOutlined, DownOutlined } from "@ant-design/icons";
import { removeAccount } from "../../services/api";
import { Link } from "react-router-dom";
export default function Header({account}) {
  const user  = JSON.parse(account);
  console.log(user);

  const userClick = (e) => e.preventDefault();
  const userLogOut = () => removeAccount;
  const menu = (
    <Menu>
      <Menu.Item key="1" onClick={userLogOut}>
          <Link to="/login">Log Out</Link>
      </Menu.Item>
      {/* <Menu.Item key="2">2nd menu item</Menu.Item>
      <Menu.Item key="3">3rd menu item</Menu.Item> */}
    </Menu>
  );

  return (
    <div className="header">
      <div className="navbar">
        <div className="logo">
          <Logo />
        </div>
        <div className="navbars">
          <span>Home</span>
          <span>Categories</span>
          <span>Contact</span>
        </div>
        <div className="user">
          <UserOutlined style={{ fontSize: "200%" }} />
          <div className="email">
            <Dropdown overlay={menu}>
              <a className="antDropdownLink" onClick={userClick}>
                <span>{user.email}</span>
                <DownOutlined />
              </a>
            </Dropdown>
            
          </div>
        </div>
      </div>
    </div>
  );
}
