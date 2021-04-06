import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreatorNav from "../src/Pages/Creator/CreatorNav";
<<<<<<< HEAD
import Example from "./Pages/Example/Example";
import Login from "./Pages/Login/Login";
import OpenSoon from "./Pages/OpenSoon/OpenSoon";
=======
import Creatorinfo from "../src/Pages/Creator/Creatorinfo";
>>>>>>> a5efaf1... add:레이아웃 완료

export class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
<<<<<<< HEAD
          <Route exact path="/creatornav" component={CreatorNav} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/OpenSoon" component={OpenSoon} />
          <Route exact path="/Example" component={Example} />
=======
          {/* <Route exact path="/creatornav" component={CreatorNav} /> */}
          <Route exact path="/creatorinfo" component={Creatorinfo} />
>>>>>>> a5efaf1... add:레이아웃 완료
        </Switch>
      </Router>
    );
  }
}

export default Routes;
