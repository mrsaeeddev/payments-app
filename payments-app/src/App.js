import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WithdrawOptions from './WithdrawOptions';
import WithdrawBank from './WithdrawBank';
import Withdraw from './Withdraw';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function AppRouter() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={WithdrawOptions} />
        <Route path="/withdraw_bank" component={WithdrawBank} />
        <Route path="/withdraw" component={Withdraw} />
      </div>
    </Router>
  );
}

export default AppRouter;
