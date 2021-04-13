import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Landing from "./core/Landing";
import Home from "./user/Home";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing}></Route>
        <Route path="/home" exact component={Home}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
