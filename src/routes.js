import React from 'react';

import {Route, IndexRoute} from 'react-router';

import App from './components/App';
import LoginView from './components/LoginView';
import RegisterView from './components/RegisterView';
import GridView from './components/GridView';
import CreationView from "./components/CreationView";
import CalendarView from "./components/CalendarView";

const loggedIn = () => {
    return true;
};

function requireAuth(nextState, replace) {
    if (!loggedIn()) {
        replace({
            pathname: '/login'
        })
    }
}

export default (
    <Route path="/" component={App} >
      <IndexRoute component={GridView} onEnter={requireAuth} />
      <Route path="calendar" component={CalendarView} />
      <Route path="login" component={LoginView} />
      <Route path="create" component={CreationView} onEnter={requireAuth} />
      <Route path="register" component={RegisterView} />
    </Route>

);
