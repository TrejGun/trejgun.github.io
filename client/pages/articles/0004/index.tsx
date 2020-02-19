import React, {FC} from "react";
import {Link, Typography} from "@material-ui/core";

import {ExternalLink} from "../../components/common/external-link";
import {MyDate} from "../../components/common/date";
import {LinkAdapter} from "../../components/common/link-adapter";
import {Comments} from "../../components/common/comments";
import {Code} from "../../components/common/code";
import controller from "./controller.txt";
import bootstrap from "./bootstrap.txt";


export const Page0004: FC = () => {
  return (
    <div>
      <MyDate date={"2019-11-03T14:18:19.626Z"} />
      <Typography component="h2" variant="h4">
        JWT based authorization for Nest.js
      </Typography>

      <p>
        In my previous article I showed hot to implement
        <Link component={LinkAdapter} to="/articles/session-based-authorization-for-nestjs">
          session based authorization
        </Link>
        Today I`m going to publish solution which uses JWT. The main difference between these approaches is: Sessions
        are good for client-to-server communication, where you can store session id in cookies and get user specific
        data based on this id. JSON Web Token is good for server-to-server communication where there are no cookies and
        state could be retrieved from request itself
      </p>

      <p>This is how controller with authorization looks like</p>

      <Code language="typescript">{controller}</Code>

      <p>And the bootstrap function is pretty simple too</p>

      <Code language="typescript">{bootstrap}</Code>

      <p>
        I tried to make this code as much as possible similar to previous one so you can compare it and even use both
        approaches at the same time. For this I also added facebook support and redis session storage.
      </p>

      <p>
        As always you can find code in my
        <ExternalLink href="https://github.com/TrejGun/jwt-based-authorization-for-nestjs">github repo</ExternalLink>
      </p>

      <Comments slug="jwt-based-authorization-for-nestjs" />
    </div>
  );
};
