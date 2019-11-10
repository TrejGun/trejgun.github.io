import * as React from "react";
import {Redirect, Route, Switch} from "react-router";

import {Page0001} from "./0001";
import {Page0002} from "./0002";
import {Page0003} from "./0003";
import {Page0004} from "./0004";
import {Page0005} from "./0005";
import {Page0006} from "./0006";


export const Articles: React.FC = () => {
  return (
    <Switch>
      <Route component={Page0001} path="/articles/custom-transport-for-nestjs" exact />
      <Route component={Page0002} path="/articles/session-based-authorization-for-nestjs" exact />
      <Route component={Page0003} path="/articles/ethereum-server-for-nestjs" exact />
      <Route component={Page0004} path="/articles/jwt-based-authorization-for-nestjs" exact />
      <Route component={Page0005} path="/articles/graphql-based-authorization-for-nestjs" exact />
      <Route component={Page0006} path="/articles/nova-poshta-google-maps-widget" exact />
      <Redirect to="/page-not-found" />
    </Switch>
  );
};
