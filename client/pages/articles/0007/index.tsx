import React, {FC} from "react";
import {Typography} from "@material-ui/core";
import {MyDate} from "../../components/common/date";
import {Comments} from "../../components/common/comments";
import {Code} from "../../components/common/code";
import workerController from "./worker.controller.txt";
import workerService from "./worker.service.txt";
import orchestratorResolver from "./orchestrator.resolver.txt";
import orchestratorService from "./orchestrator.service.txt";


export const Page0007: FC = () => {
  return (
    <div>
      <MyDate date={"2019-11-14T18:40:19.556Z"} />
      <Typography component="h2" variant="h4">
        Collecting data from workers in Nest.js
      </Typography>

      <p>
        In Nest.js request to microcervice worker returns an Observable object, but the request to database usually
        return promise. How to deal with situation when you have to combine result from several workers and each result
        can be an array with 0+ elements?
      </p>

      <p>For this promise result should be converted to Observable and elements emitted one by one</p>

      <Code language="typescript">{workerController}</Code>

      <Code language="typescript">{workerService}</Code>

      <p>
        On the other side orchestrator will create (two) connections to such workers and receive stream of results from
        each of them. These streams has to be merged into one.Then combined stream drained and all elements returned to
        the frontend as an array
      </p>

      <Code language="typescript">{orchestratorResolver}</Code>

      <Code language="typescript">{orchestratorService}</Code>

      <p>
        In comparison to promise based solution, this method is faster and more stable, because it allows you to end
        stream by timeout even if not all elements were received.
      </p>

      <Comments slug="collecting-data-from-workers-in-nestjs" />
    </div>
  );
};
