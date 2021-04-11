import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Landing from "./core/Landing";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
