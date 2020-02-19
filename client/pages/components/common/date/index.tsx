import React, {FC} from "react";

import useStyles from "./styles";


interface IDateProps {
  date: Date | string | number;
}

export const MyDate: FC<IDateProps> = ({date}) => {
  const classes = useStyles();
  return <div className={classes.date}>{new Date(date).toISOString().split("T")[0]}</div>;
};
