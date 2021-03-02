import React, {FC} from "react";
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
import {Page0013} from "./0013";
import {Page0014} from "./0014";
import {Page0015} from "./0015";
import {Page0016} from "./0016";
import {Page0017} from "./0017";
import {Page0018} from "./0018";

export const Articles: FC = () => {
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
      <Route component={Page0013} path="/articles/graphql-global-validation-pipeline-code-first" exact />
      <Route component={Page0014} path="/articles/valid-code-with-5-reserved-words-in-a-row" exact />
      <Route component={Page0015} path="/articles/terminus-migration-guide" exact />
      <Route component={Page0016} path="/articles/hot-potato-using-nestjs-microservices" exact />
      <Route component={Page0017} path="/articles/s3-module-for-nestjs" exact />
      <Route component={Page0018} path="/articles/jwks-based-authorization-for-nestjs" exact />
      <Redirect to="/page-not-found" />
    </Switch>
  );
};
