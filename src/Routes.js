import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreatorNav from "../src/Pages/Creator/CreatorNav";
import Example from "./Pages/Example/Example";
import Login from "./Pages/Login/Login";
import OpenSoon from "./Pages/OpenSoon/OpenSoon";
import Creatorinfo from "../src/Pages/Creator/Creatorinfo";
import Creatorintroduce from "../src/Pages/Creator/Creatorintroduce";
import CreatorTitle from "./Pages/Creator/CreatorTitle";

export class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/creatornav" component={CreatorNav} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/OpenSoon" component={OpenSoon} />
          <Route exact path="/Example" component={Example} />
          <Route exact path="/creatorintroduce" component={Creatorintroduce} />
          <Route exact path="/creatorinfo" component={Creatorinfo} />
          <Route exact path="/creator-title-cover" component={CreatorTitle} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
