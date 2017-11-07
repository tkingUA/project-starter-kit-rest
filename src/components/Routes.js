'use strict';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../containers/HomePage';
import FuelSavingsPage from '../containers/FuelSavingsPage';
import AboutPage from '../containers/AboutPage';
import NotFoundPage from './NotFoundPage';


const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/fuel-savings" component={FuelSavingsPage} />
    <Route path="/about" component={AboutPage} />
    <Route component={NotFoundPage} />
  </Switch>
);

export default Routes;
