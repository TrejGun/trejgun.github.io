import * as React from "react";
import {Link, Typography} from "@material-ui/core";
import {ExternalLink} from "../../components/common/external-link";
import {MyDate} from "../../components/common/date";
import {LinkAdapter} from "../../components/common/link-adapter";
import {Comments, FacebookProvider} from "react-facebook";


export const Page0004: React.FC = () => {
  return (
    <div>
      <MyDate date={"2019-11-03T14:18:19.626Z"} />
      <Typography component="h2" variant="h4">
        JWT based authorization for Nest.js
      </Typography>

      <p>
        In my previous article I discussed{" "}
        <Link component={LinkAdapter} to="/articles/session-based-authorization-for-nestjs">
          session based authorization
        </Link>{" "}
        Today I`m going to publish solution which uses JWT. The main difference between these approaches is: Sessions
        are good for client-to-server communication, where you can store session id in cookies and get user specific
        data based on this id. JSON Web Token is good for server-to-server communication where there are no cookies and
        state could be retrieved from request itself
      </p>

      <p>
        I tried to make this code as much as possible similar to previous one so you can compare it and even use both
        approaches at the same time. For this I also added facebook support and redis session storage. As always you can
        find code in my{" "}
        <ExternalLink href="https://github.com/TrejGun/jwt-based-authorization-for-nestjs">github repo</ExternalLink>
      </p>

      <FacebookProvider appId={process.env.FACEBOOK_CLIENT_ID}>
        <Comments href="https://trejgun.github.io/articles/jwt-based-authorization-for-nestjs" />
      </FacebookProvider>
    </div>
  );
};
