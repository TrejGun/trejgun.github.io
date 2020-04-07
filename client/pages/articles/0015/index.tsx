import React, {FC} from "react";
import {Typography} from "@material-ui/core";
import {MyDate} from "../../components/common/date";
import {Comments} from "../../components/common/comments";
import {Code} from "../../components/common/code";

import oldAppModule from "./app.module.old.txt";
import terminusOptions from "./terminus.options.txt";
import newAppModule from "./app.module.new.txt";
import HealthModule from "./health.module.txt";
import HealthController from "./health.controller.txt";
import {ExternalLink} from "../../components/common/external-link";


export const Page0015: FC = () => {
  return (
    <div>
      <MyDate date={"2019-04-07T13:53:19.556Z"} />
      <Typography component="h2" variant="h4">
        Terminus migration guide
      </Typography>

      <p>
        Terminus module was recently updated but there still no guide available on official site so here is my version
      </p>

      <p>Before:</p>

      <Code language="typescript">{oldAppModule}</Code>
      <Code language="typescript">{terminusOptions}</Code>

      <p>After:</p>

      <Code language="typescript">{newAppModule}</Code>
      <Code language="typescript">{HealthModule}</Code>
      <Code language="typescript">{HealthController}</Code>

      <p>
        There is no HealthCheckResult exported from @nestjs/terminus module so I created a
        <ExternalLink href="https://github.com/nestjs/terminus/issues/639">bug report</ExternalLink>
      </p>

      <Comments slug="terminus-migration-guide" />
    </div>
  );
};
