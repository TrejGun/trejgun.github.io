import * as React from "react";
import * as ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {createMuiTheme, CssBaseline, MuiThemeProvider} from "@material-ui/core";


export default (App: React.FunctionComponent): void => {
  ReactDOM.hydrate(
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
    document.getElementById("app"),
  );
};
