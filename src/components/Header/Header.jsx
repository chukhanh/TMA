import React from "react";
import Logo from "../Logo/Logo";
import "./Header.scss";
import { Menu, Dropdown, message } from "antd";
import { UserOutlined, DownOutlined } from "@ant-design/icons";
const Header = ({ history, useLocalStorage }) => {
 
 

  const userClick = ({ key }) => {
    switch (key) {
      case "1":
        localStorage.removeItem("accountLoginInfo");
        localStorage.removeItem("Order");
        history.push(`./login`);
        break;

      default:
        message.info(`Click on item ${key}`);
        break;
    }
  };

  const menu = (
    <Menu onClick={userClick}>
      <Menu.Item key="1">Log Out</Menu.Item>
    </Menu>
  );

  let value;

  [value] = useLocalStorage('accountLoginInfo');
  
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
              <a
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
              >
                <span>{value.map(e => e.email)}</span>
                <DownOutlined />
              </a>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
}
export default  Header;