import * as React from "react";
import {AppBar, Hidden, Link, Toolbar} from "@material-ui/core";

import {LinkAdapter} from "../link-adapter";

import useStyles from "./styles";


export const Header: React.FC = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.appbar} position="fixed">
      <Toolbar className={classes.toolbar}>
        <Link className={classes.title} component={LinkAdapter} to="/">
          <Hidden smDown>TrejGun`s blog</Hidden>
        </Link>
        <div className={classes.grow} />
      </Toolbar>
    </AppBar>
  );
};
