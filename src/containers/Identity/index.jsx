import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { Switch, Route, useRouteMatch} from 'react-router-dom';
import { apiAccount } from '../../services/URL/constURL';
import Login from './Login/Login';
import Register from './Register/Register';


const Identity = () => {
    const {path} = useRouteMatch();
    let [users, setUsers] = useState([]);
    // const {location} = useLocation();

    useEffect(() => {
      axios
        .get(apiAccount)
        .then(response => setUsers(response.data));
    }, [users]);

    
    return (
        <Switch>
          <Route exact path={`${path}/login`} render={(props)=> (
            <Login {...props} data={users}/>
          )}/>
          <Route exact path={`${path}/register`} render={(props)=> (
            <Register {...props} data={users}/>
          )}/>
        </Switch>
      );
}

export default Identity;