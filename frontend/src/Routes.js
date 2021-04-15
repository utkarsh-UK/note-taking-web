import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Landing from "./core/Landing";
import Home from "./user/Home";
import FakeHome from "./user/FakeHome";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing}></Route>
        <Route path="/home" exact component={Home}></Route>
        <Route path="/home/note/:noteid" exact component={FakeHome}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
