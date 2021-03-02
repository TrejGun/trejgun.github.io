import {makeStyles} from "@material-ui/core";

export default makeStyles(
  theme => ({
    appbar: {
      backgroundColor: "#3C75E6",
    },
    toolbar: {
      minHeight: 64,
    },
    grow: {
      flexGrow: 1,
    },
    title: {
      color: theme.palette.common.white,
      textDecoration: "none",
      fontWeight: 500,
      fontSize: 36,
      "&:hover": {
        textDecoration: "none",
      },
    },
    logo: {
      display: "inline-block",
      verticalAlign: "middle",
      height: 40,
      width: 62,
      marginRight: theme.spacing(1),
    },
  }),
  {name: "Header"},
);
