import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import OpenSoon from "./Pages/OpenSoon/OpenSoon";
import GlobalStyle from "./styles/GlobalStyle";
import Nav from "./Components/Nav/Nav";

export class Routes extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <Router>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/open-soon" component={OpenSoon} />
            <Route exact path="/nav" component={Nav} />
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default Routes;
