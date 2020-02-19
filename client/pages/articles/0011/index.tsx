import React, {FC} from "react";
import {Typography} from "@material-ui/core";
import {MyDate} from "../../components/common/date";
import {Comments} from "../../components/common/comments";
import {Code} from "../../components/common/code";
import autocomplete from "./autocomplete.txt";


export const Page0011: FC = () => {
  return (
    <div>
      <MyDate date={"2019-11-26T18:56:19.556Z"} />
      <Typography component="h2" variant="h4">
        Bindings for using Final Form with Material UI Autocomplete
      </Typography>

      <p>
        Recently Material UI team added new component to Lab - Autocomplete 🎉. Before that users had to use
        react-select or other alternatives, which required too much code and efforts, but now, when it is native and has
        no documentation, examples and code samples over internet; I want to capitalize on that and publish my solution
        for Final Form integration.
      </p>

      <Code language="typescript">{autocomplete}</Code>

      <p>Hope this helps</p>

      <Comments slug="bindings-for-using-final-form-with-material-ui-autocomplete" />
    </div>
  );
};
