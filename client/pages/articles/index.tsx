import * as React from "react";
import {Redirect, Route, Switch} from "react-router";

import {Page0001} from "./0001";
import {Page0002} from "./0002";
import {Page0003} from "./0003";


export const Articles: React.FC = () => {
  return (
    <Switch>
      <Route component={Page0001} path="/articles/custom-transport-for-nestjs" exact />
      <Route component={Page0002} path="/articles/nestjs-authorization" exact />
      <Route component={Page0003} path="/articles/ethereum-server-for-nestjs" exact />
      <Redirect to="/page-not-found" />
    </Switch>
  );
};
