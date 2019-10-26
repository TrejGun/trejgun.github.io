import * as React from "react";
import {Redirect, Route, Switch} from "react-router";

import {Page0001} from "./0001";
import {Page0002} from "./0002";


export const Articles: React.FC = () => {
  return (
    <Switch>
      <Route component={Page0001} path="/articles/tutorial-custom-transport-for-nestjs" exact />
      <Route component={Page0002} path="/articles/nestjs-authorization" exact />
      <Redirect to="/page-not-found" />
    </Switch>
  );
};
