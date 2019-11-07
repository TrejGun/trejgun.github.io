import * as React from "react";
import {hot} from "react-hot-loader/root";
import {Switch, Route, Redirect} from "react-router";

import {Layout} from "./components/common/layout";
import {Landing} from "./landing";
import {Articles} from "./articles";
import {About} from "./about";
import {PageNotFound} from "./page-not-found";
import {TermsAndConditions} from "./terms-and-conditions";


const App: React.FC = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Landing} exact />
        <Route path="/articles" component={Articles} />
        <Route path="/about" component={About} />
        <Route path="/terms-and-conditions" component={TermsAndConditions} />
        <Route path="/page-not-found" component={PageNotFound} />
        <Redirect to="/page-not-found" />
      </Switch>
    </Layout>
  );
};

export default hot(App);
