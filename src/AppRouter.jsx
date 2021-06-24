import React from 'react';
import { Switch, Route, BrowserRouter as Router, Redirect} from 'react-router-dom';

import Identity from './containers/Identity';


export default function AppRouter() {
    return(
        <Router>
            <Switch>
                <Route path="/identity" component={Identity} />
                <Redirect to="/identity/login"/>
            </Switch>
        </Router>
    );
}