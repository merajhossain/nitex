import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import HomePage from './HomePage';
import NotFound from './NotFound';
import Header from './Header';
import Footer from './Footer';

const AppRoute = () => {
    return (
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/not-found' component={NotFound} />
        </Switch>
    )
}

export default AppRoute;