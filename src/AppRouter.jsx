import React from 'react';
import { Switch, BrowserRouter as Router, Redirect} from 'react-router-dom';
import ProductScreen from './containers/Categories/productScreen';
import Identity from './containers/Identity';
import UserTemplate from './HOC/UserTemplate';


export default function AppRouter() {
    // console.log(history);
    return(
        <Router>
            <Switch >
                <UserTemplate exact path="/category" component={ProductScreen}/>
                <UserTemplate exact path="/identity" component={Identity} />
                <Redirect to="/identity/login"/>
            </Switch>
        </Router>
    );
}