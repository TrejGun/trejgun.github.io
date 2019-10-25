import * as React from "react";
import {hot} from "react-hot-loader/root";
import {Switch, Route} from "react-router";

import {Layout} from "./components/common/layout";
import {Landing} from "./landing";
import {Articles} from "./articles";


const App: React.FC = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Landing} exact />
        <Route path="/articles" component={Articles} />
      </Switch>
    </Layout>
  );
};

export default hot(App);
