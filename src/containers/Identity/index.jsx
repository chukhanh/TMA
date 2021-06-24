import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";

import { apiAccount } from "../../services/URL/URL";
import ProductScreen from "./Categories/productScreen";

import Login from "./Login/Login";
import Register from "./Register/Register";

const Identity = () => {
  const { path } = useRouteMatch();
  let [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get(apiAccount).then((response) => setUsers(response.data));
  }, [users]);
  
  var account = localStorage.getItem('account-login-info');
  var praseAccount = JSON.parse(account);
  console.log(praseAccount);
  return (
    <Switch>
      <Route
        exact
        path={`${path}/login`}
        render={(props) => <Login {...props} data={users} />}
      />

      <Route
        exact
        path={`${path}/register`}
        render={(props) => <Register {...props} data={users} />}
      />
       <Route exact path={`${path}/category`}
       render={(props) => <ProductScreen {...props} data={praseAccount} />}
       />
    </Switch>
  );
};

export default Identity;
