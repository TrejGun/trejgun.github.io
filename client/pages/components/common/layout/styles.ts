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
      paddingTop: theme.spacing(8), // equals to AppBar height
    }),
  }),
  {name: "Layout"},
);
