import * as React from "react";
import {Redirect, Route, Switch} from "react-router";

import {Page0001} from "./0001";
import {Page0002} from "./0002";
import {Page0003} from "./0003";
import {Page0004} from "./0004";
import {Page0005} from "./0005";
import {Page0006} from "./0006";
import {Page0007} from "./0007";
import {Page0008} from "./0008";
import {Page0009} from "./0009";
import {Page0010} from "./0010";
import {Page0011} from "./0011";
import {Page0012} from "./0012";


export const Articles: React.FC = () => {
  return (
    <Switch>
      <Route component={Page0001} path="/articles/custom-transport-for-nestjs" exact />
      <Route component={Page0002} path="/articles/session-based-authorization-for-nestjs" exact />
      <Route component={Page0003} path="/articles/ethereum-server-for-nestjs" exact />
      <Route component={Page0004} path="/articles/jwt-based-authorization-for-nestjs" exact />
      <Route component={Page0005} path="/articles/graphql-based-authorization-for-nestjs" exact />
      <Route component={Page0006} path="/articles/nova-poshta-google-maps-widget" exact />
      <Route component={Page0007} path="/articles/collecting-data-from-workers-in-nestjs" exact />
      <Route component={Page0008} path="/articles/how-to-convert-http-exception-to-rpc-exception" exact />
      <Route component={Page0009} path="/articles/apollo-client-for-authorization-with-nestjs" exact />
      <Route component={Page0010} path="/articles/ssr-nextjs-authentication-for-graphql-nestjs-application" exact />
      <Route component={Page0011} path="/articles/bindings-for-using-final-form-with-material-ui-autocomplete" exact />
      <Route component={Page0012} path="/articles/biometric-authentication-for-nestjs" exact />
      <Redirect to="/page-not-found" />
    </Switch>
  );
};
