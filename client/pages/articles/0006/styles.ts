import {makeStyles} from "@material-ui/core";


export default makeStyles(
  () => ({
    map: {
      width: 600,
      height: 400,
      backgroundColor: "#c0c0c0",
      position: "relative",
    },
    spinner: {
      top: "50%",
      left: "50%",
      position: "absolute",
      marginTop: -20,
      marginLeft: -20,
    },
  }),
  {name: "NovaPoshta"},
);
