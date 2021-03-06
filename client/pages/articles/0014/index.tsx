import React, {FC} from "react";
import {Typography} from "@material-ui/core";
import {MyDate} from "../../components/common/date";
import {Code} from "../../components/common/code";

import reserved from "./reserved.txt";

export const Page0014: FC = () => {
  return (
    <div>
      <MyDate date={"2019-12-02T19:19:19.556Z"} />
      <Typography component="h2" variant="h4">
        Valid code with 5 reserved words in a row
      </Typography>

      <p>Here is an example</p>

      <Code language="typescript">{reserved}</Code>

      <p>Who can find longer chain?</p>
    </div>
  );
};
