import React, {FC} from "react";
import {Container} from "@material-ui/core";

import {Header} from "../header";

import useStyles from "./styles";

export const Layout: FC = ({children}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <Container className={classes.container} maxWidth="md">
        {children}
      </Container>
    </div>
  );
};
