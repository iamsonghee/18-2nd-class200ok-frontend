/* eslint-disable */
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreatorNav from "../src/Pages/Creator/CreatorNav";
import Example from "./Pages/Example/Example";
import Login from "./Pages/Login/Login";
import OpenSoon from "./Pages/OpenSoon/OpenSoon";
import Creatorinfo from "../src/Pages/Creator/Creatorinfo";
import Creator from "../src/Pages/Creator/Creator";
import Modal from "./Components/Modal/Modal";

export class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/creatornav" component={CreatorNav} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={OpenSoon} />
          <Route exact path="/Example" component={Example} />
          <Route exact path="/ModalLayout" component={Modal} />
          <Route exact path="/creatorinfo" component={Creatorinfo} />
          <Route exact path="/creator/:id" component={Creator} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
