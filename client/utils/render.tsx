import React, {FunctionComponent} from "react";
import * as ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {createMuiTheme, CssBaseline, MuiThemeProvider} from "@material-ui/core";

export default (App: FunctionComponent): void => {
  const rootElement = document.getElementById("app");
  if (!rootElement) {
    return;
  }
  ReactDOM[rootElement.hasChildNodes() ? "hydrate" : "render"](
    <MuiThemeProvider
      theme={createMuiTheme({
        typography: {
          fontSize: 16,
        },
      })}
    >
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MuiThemeProvider>,
    rootElement,
  );
};
