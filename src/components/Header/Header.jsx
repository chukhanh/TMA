import React from "react";
import Logo from "../Logo/Logo";
import "./Header.scss";
import { Menu, Dropdown } from "antd";
import { UserOutlined, DownOutlined } from "@ant-design/icons";

export default function Header({ account }) {
  
  console.log(account); 
  const userClick = (e) => e.preventDefault();
  const userLogOut = () => {
    localStorage.removeItem("account-login-info");
    this.props.history.push("./login");
  };
  const menu = (
    <Menu>
      <Menu.Item key="1">
        <button type="submit" onSubmit={userLogOut}>Log Out</button>
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
                <span>{account.email}</span>
                <DownOutlined />
              </a>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
}
