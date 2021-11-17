import React, {FC} from "react";
import {Link, Typography} from "@material-ui/core";
import {MyDate} from "../../components/common/date";
import {Code} from "../../components/common/code";
import {LinkAdapter} from "../../components/common/link-adapter";
import types from "./types.txt";
import constants from "./constants.txt";
import storage from "./storage.txt";
import client from "./client.txt";

export const Page0009: FC = () => {
  return (
    <div>
      <MyDate date={"2019-11-23T19:18:19.556Z"} />
      <Typography component="h2" variant="h4">
        Apollo client and authorization with Nest.js
      </Typography>

      <p>
        As of recently I was working on the front-end part of authorization, for my project based on GraphQL. So today I
        want to share Apollo client configuration which you can use with example from my previous article
        <Link component={LinkAdapter} to="/articles/authorization-for-nestjs">
          Authorization for Nest.js
        </Link>
        This code is for <em>react-native</em> but can be easily adopted to any other frontend framework.
      </p>

      <Code language="typescript">{types}</Code>
      <Code language="typescript">{constants}</Code>
      <Code language="typescript">{storage}</Code>
      <Code language="typescript">{client}</Code>

      <p>
        You should consider to use it if you have application with client side rendering and should not otherwise. In
        other words do not use it with Next.js and Server Side Rendering (better don`t use Next.js at all), because you
        won`t be able to obtain and refresh <em>JWT</em> from server side. Use session based auth and share cookies
        between clients but this would be a topic for my next article
      </p>
    </div>
  );
};
