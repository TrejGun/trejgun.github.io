import * as React from "react";
import {Redirect, Route, Switch} from "react-router";

import {Page0001} from "./0001";


export const Articles: React.FC = () => {
  return (
    <Switch>
      <Route path="/articles/tutorial-custom-transport-for-nestjs" component={Page0001} exact />
      <Redirect to="/error/page-not-found" />
    </Switch>
  );
};
