import * as React from "react";
import {Typography} from "@material-ui/core";
import {MyDate} from "../../components/common/date";
import {Comments} from "../../components/common/comments";
import {Code} from "../../components/common/code";
import filter from "./filter.txt";


export const Page0008: React.FC = () => {
  return (
    <div>
      <MyDate date={"2019-11-16T14:31:19.556Z"} />
      <Typography component="h2" variant="h4">
        How to convert HttpException to RpcException?
      </Typography>

      <p>
        It is really easy to return erroneous http response in Nest.js application, you just have to throw
        <em>HttpException</em> or one of it`s implementations like <em>UnauthorizedException</em>,
        <em>NotFoundException</em> or <em>BadRequestException</em>. It is meaningful and you don`t have to reinvent the
        wheel each time. But What about microservices? Potentially you can throw the same <em>Exception</em> from there
        too, but on the other side you will receive
        <em>Internal Server Error</em>, which is not meaningful at all, so to use built-in exceptions they has to be
        converted to <em>RpcException</em> first. To do this I wrote this simple filter.
      </p>

      <Code language="typescript">{filter}</Code>

      <Comments slug="how-to-convert-http-exception-to-rpc-exception" />
    </div>
  );
};
