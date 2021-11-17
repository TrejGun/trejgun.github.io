import React, {FC} from "react";
import {Typography} from "@material-ui/core";
import {MyDate} from "../../components/common/date";
import {Code} from "../../components/common/code";
import {ExternalLink} from "../../components/common/external-link";

import primitives from "./primitives.txt";
import custom from "./custom.txt";
import dto from "./dto.txt";

export const Page0013: FC = () => {
  return (
    <div>
      <MyDate date={"2019-12-02T19:19:19.556Z"} />
      <Typography component="h2" variant="h4">
        GraphQL global validation pipeline (code first)
      </Typography>

      <p>
        Global validation for GraphQl is a bit tricky and does not work under some conditions, but today I will show you
        how to use it on your project.
      </p>

      <p>
        Validation <em>does not</em> affect primitive types like strings/numbers. This is good, because you can still
        have simple values directly from query/mutation
      </p>

      <Code language="typescript">{primitives}</Code>

      <p>
        Validation <em>DOES NOT</em> work with custom types like Enums
      </p>

      <Code language="typescript">{custom}</Code>

      <p>Validation works with objects, so you have to wrap query/mutation params</p>

      <Code language="typescript">{dto}</Code>

      <p>
        Following this <span style={{textDecoration: "line-through"}}>ugly workarounds</span> simple rules you can now
        create nice REST-like validation for GraphQL
      </p>

      <p>
        The code for this article evolved over time and now shows validation for REST, GraphQL and WebSockets in this
        <ExternalLink href="https://github.com/GemunIon/nestjs-validation">github repo</ExternalLink>
      </p>
    </div>
  );
};
