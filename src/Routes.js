import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreatorNav from "../src/Pages/Creator/CreatorNav";
import Example from "./Pages/Example/Example";
import Login from "./Pages/Login/Login";
import OpenSoon from "./Pages/OpenSoon/OpenSoon";

export class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/creatornav" component={CreatorNav} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/OpenSoon" component={OpenSoon} />
          <Route exact path="/Example" component={Example} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
