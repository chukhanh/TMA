import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";
import { getProduct } from "../../services/api/ProductServices";

import { apiAccount } from "../../services/URL/URL";
import ProductScreen from "./Categories/productScreen";
import ProductInfo from "./Categories/ProductsInfo/ProductInfo";

import Login from "./Login/Login";
import Register from "./Register/Register";

const Identity = () => {
  const { path } = useRouteMatch();
  let [users, setUsers] = useState([]);
  let [product, setProducts] = useState([]);

  useEffect(() => {
    setProducts(getProduct);
  }, []);

  let arrayEmail = [];
  users.map((el) => arrayEmail.push(el.email));

  useEffect(() => {
    axios.get(apiAccount).then((response) => setUsers(response.data));
  }, []);

  const useLocalStorage = (key) => {
    const [storedValue, setStoredValue] = useState(() => {
      try {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : 0;
      } catch (error) {
        console.log(error);
        return 0;
      }
    });
    console.log(product);
    const setValue = (value) => {
      try {
        // Allow value to be a function so we have same API as useState
        const valueToStore =
          value instanceof Function ? value(storedValue) : value;
        // Save state
        setStoredValue(valueToStore);
        // Save to local storage
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (error) {
        // A more advanced implementation would handle the error case
        console.log(error);
      }
    };
    return [storedValue, setValue];
  };

  return (
    <Switch>
      <Route
        exact
        path={`${path}/login`}
        render={(props) => <Login {...props} data={users} array={arrayEmail} />}
      />

      <Route
        exact
        path={`${path}/register`}
        render={(props) => (
          <Register {...props} data={users} array={arrayEmail} />
        )}
      />
      <Route
        exact
        path={`${path}/category`}
        render={(props) => (
          <ProductScreen
            {...props}
            useLocalStorage={useLocalStorage}
            product={product}
          />
        )}
      />
      {product.map((el) => {
        return <Route 
        exact
        path={`${path}/category/${el.id}`} 
        render={(props) => (
          <ProductInfo
            {...props}  
            useLocalStorage={useLocalStorage}
            product={product}
          />
        )}
        />
      })}
    </Switch>
  );
};

export default Identity;
