import React, { useState } from "react";
import Logo from "../Logo/Logo";
import "./Header.scss";
import { Menu, Dropdown, message } from "antd";
import { UserOutlined, DownOutlined } from "@ant-design/icons";
const Header = ({ history, useLocalStorage }) => {
 
  // const useLocalStorage = (key) => {
  //   const [storedValue, setStoredValue] = useState(() => {
  //     try {
  //       const item = window.localStorage.getItem(key);
  //       return item ? JSON.parse(item) : 0;
  //     } catch (error) {
        
  //       console.log(error);
  //       return 0;
  //     }
  //   });

  //   const setValue = (value) => {
  //     try {
  //       // Allow value to be a function so we have same API as useState
  //       const valueToStore =
  //         value instanceof Function ? value(storedValue) : value;
  //       // Save state
  //       setStoredValue(valueToStore);
  //       // Save to local storage
  //       window.localStorage.setItem(key, JSON.stringify(valueToStore));
  //     } catch (error) {
  //       // A more advanced implementation would handle the error case
  //       console.log(error);
  //     }
  //   };
  //   return [storedValue, setValue];
  // }

  const userClick = ({ key }) => {
    switch (key) {
      case "1":
        localStorage.removeItem("accountLoginInfo");
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