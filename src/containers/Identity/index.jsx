import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Login from './Login/Login';



const Identity = () => {
    const {path} = useRouteMatch();
    return (
        <Switch>
          <Route exact path={`${path}/login`} component={Login}/>
          <Route exact path={`${path}/register`} />
        </Switch>
      );
}

export default Identity;