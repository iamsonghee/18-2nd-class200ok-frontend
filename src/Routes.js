import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreatorNav from "../src/Pages/Creator/CreatorNav";

export class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/creatornav" component={CreatorNav} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
