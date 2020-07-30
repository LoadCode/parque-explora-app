import React from "react";
import { Route, Switch } from "react-router-dom";
import EntryPortal from "./EntryPortal";
import GamePortal from "./GamePortal";
import PageError from "./PageError";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={EntryPortal} />
    <Route exact path="/challenge" component={GamePortal} />
    <Route component={PageError} />
  </Switch>
);

export default Routes;
