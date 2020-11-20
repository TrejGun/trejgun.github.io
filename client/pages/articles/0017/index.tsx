import React, {FC} from "react";
import {Typography} from "@material-ui/core";
import {MyDate} from "../../components/common/date";
import {Code} from "../../components/common/code";

import S3Module from "./s3.module.txt";
import S3Types from "./s3.types.txt";
import S3Schemas from "./s3.schemas.txt";
import S3Controller from "./s3.controller.txt";
import S3Service from "./s3.service.txt";


export const Page0017: FC = () => {
  return (
    <div>
      <MyDate date={"2020-06-05T13:10:27.733Z"} />
      <Typography component="h2" variant="h4">
        S3 Module for Nest.js
      </Typography>

      <p>I was working with S3 recently and want to share my solution.</p>

      <Code language="typescript">{S3Module}</Code>
      <Code language="typescript">{S3Types}</Code>
      <Code language="typescript">{S3Schemas}</Code>
      <Code language="typescript">{S3Controller}</Code>
      <Code language="typescript">{S3Service}</Code>

      <p>Amazon is fucking expensive and over complicated. Just saying.</p>
    </div>
  );
};
