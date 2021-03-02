import {makeStyles} from "@material-ui/core";

export default makeStyles(
  theme => ({
    root: {
      overflowY: "auto",
      overflowX: "hidden",
      display: "flex",
      minHeight: "100vh",
      position: "relative",
    },
    container: theme.mixins.gutters({
      paddingTop: theme.spacing(10), // equals to AppBar height

      "& p": {
        "& *": {
          paddingLeft: 5,
          paddingRight: 5,
        },
      },
    }),
  }),
  {name: "Layout"},
);
