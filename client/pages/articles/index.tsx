import React, {FC} from "react";
import {Redirect, Route, Switch} from "react-router";

import {Page0001} from "./0001-custom-transport-for-nestjs";
import {Page0002} from "./0002-authorization-for-nestjs";
import {Page0003} from "./0003-ethereum-server-for-nestjs";
import {Page0006} from "./0006-nova-poshta-google-maps-widget";
import {Page0007} from "./0007-collecting-data-from-workers-in-nestjs";
import {Page0008} from "./0008-how-to-convert-http-exception-to-rpc-exception";
import {Page0009} from "./0009-apollo-client-for-authorization-with-nestjs";
import {Page0010} from "./0010-ssr-nextjs-authentication-for-graphql-nestjs-application";
import {Page0012} from "./0012-biometric-authentication";
import {Page0013} from "./0013-graphql-global-validation-pipeline-code-first";
import {Page0014} from "./0014-valid-code-with-5-reserved-words-in-a-row";
import {Page0016} from "./0016-hot-potato-using-nestjs-microservices";
import {Page0017} from "./0017-s3-module-for-nestjs";

export const Articles: FC = () => {
  return (
    <Switch>
      <Route component={Page0001} path="/articles/custom-transport-for-nestjs" exact />
      <Route component={Page0002} path="/articles/authorization-for-nestjs" exact />
      <Route component={Page0003} path="/articles/ethereum-server-for-nestjs" exact />
      <Route component={Page0006} path="/articles/nova-poshta-google-maps-widget" exact />
      <Route component={Page0007} path="/articles/collecting-data-from-workers-in-nestjs" exact />
      <Route component={Page0008} path="/articles/how-to-convert-http-exception-to-rpc-exception" exact />
      <Route component={Page0009} path="/articles/apollo-client-for-authorization-with-nestjs" exact />
      <Route component={Page0010} path="/articles/ssr-nextjs-authentication-for-graphql-nestjs-application" exact />
      <Route component={Page0012} path="/articles/biometric-authentication" exact />
      <Route component={Page0013} path="/articles/graphql-global-validation-pipeline-code-first" exact />
      <Route component={Page0014} path="/articles/valid-code-with-5-reserved-words-in-a-row" exact />
      <Route component={Page0016} path="/articles/hot-potato-using-nestjs-microservices" exact />
      <Route component={Page0017} path="/articles/s3-module-for-nestjs" exact />
      <Redirect to="/page-not-found" />
    </Switch>
  );
};
