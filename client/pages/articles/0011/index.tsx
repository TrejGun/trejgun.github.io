import * as React from "react";
import {Typography} from "@material-ui/core";
import {MyDate} from "../../components/common/date";
import {Comments} from "../../components/common/comments";
import {Code} from "../../components/common/code";
import autocomplete from "./autocomplete.txt";


export const Page0011: React.FC = () => {
  return (
    <div>
      <MyDate date={"2019-11-26T18:56:19.556Z"} />
      <Typography component="h2" variant="h4">
        Material UI Autocomplete bindings to Final Form
      </Typography>

      <p>
        Recently Material UI team added new component to Lab - Autocomplete 🎉. Before that users had to use
        react-select or other alternatives, which required too much code and efforts, but now, when it is native and has
        no documentation, examples and code samples over internet; I want to capitalize on that and publish my solution
        for Final Form integration.
      </p>

      <Code language="typescript">{autocomplete}</Code>

      <p>Hope this helps</p>

      <Comments slug="material-ui-autocomplete-bindings-to-final-form" />
    </div>
  );
};
