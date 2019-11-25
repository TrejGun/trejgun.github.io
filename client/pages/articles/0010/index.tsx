import * as React from "react";
import {Link, Typography} from "@material-ui/core";
import {MyDate} from "../../components/common/date";
import {Comments} from "../../components/common/comments";
import {Code} from "../../components/common/code";
import {LinkAdapter} from "../../components/common/link-adapter";
import controller from "./controller.txt";
import fetch from "./fetch.txt";
import module from "./module.txt";
import apollo from "./apollo.txt";


export const Page0010: React.FC = () => {
  return (
    <div>
      <MyDate date={"2019-11-24T19:40:19.556Z"} />
      <Typography component="h2" variant="h4">
        SSR Next.js authentication for GraphQL Nest.js application
      </Typography>

      <p>
        In last article I promised to show how to authenticate Next.js frontend with Server Side Rendering with Nest.js
        GraphQL application. Here it comes. The theory is REST client posts login/password to <em>/login</em>
        endpoint and saves session to cookies, then shares this session with Apollo client to make requests to
        <em>/graphql</em> endpoint. To illustrate backend lets take code from another my article
        <Link component={LinkAdapter} to="/articles/session-based-authorization-for-nestjs">
          Session based authorization for Nest.js
        </Link>
      </p>

      <Code language="typescript">{controller}</Code>

      <p>This controller will authorize user based on credentials sent by this small fetch wrapper</p>

      <Code language="typescript">{fetch}</Code>

      <p>Now it`s time to look at ApplicationModule and GraphQL configuration.</p>

      <Code language="typescript">{module}</Code>

      <p>
        CORS should be there because frontend and backend apps are most likely running on different ports even on
        localhost. In this example I assume backend is on 3000 and frontend is on 3001 port. CORS middleware also should
        be applied to app itself for login to work.
      </p>

      <p>And here comes actual Apollo config. It is tiny but powerful.</p>

      <Code language="typescript">{apollo}</Code>

      <p>
        Notice how it uses <em>unfetch</em> to make REST requests from backend and the part it shares with frontend
        fetch call, that is used for CORS. And cookies are shared by <em>withApollo</em> or rather it passes headers
        from initial page request (which includes cookies) to subsequent GraphQL requests.
      </p>

      <Comments slug="ssr-nextjs-authentication-for-graphql-nestjs-application" />
    </div>
  );
};
