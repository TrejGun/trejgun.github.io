import React, {FC} from "react";
import {Typography} from "@material-ui/core";
import {ExternalLink} from "../../components/common/external-link";
import {MyDate} from "../../components/common/date";


export const Page0002: FC = () => {
  return (
    <div>
      <MyDate date={"2019-10-26T14:08:19.626Z"} />
      <Typography component="h2" variant="h4">
        Session based authorization for Nest.js
      </Typography>

      <p>
        I wrote this code some time ago and then made an example repo out of it because was going to write an article
        and publish it somewhere on medium or habr, but changed my plans and started this blog, where I don`t need to
        have positive karma or any other kind of rating to publish articles.
      </p>

      <Typography component="h3" variant="h5">
        Problem
      </Typography>

      <p>Me and as appeared a lot of other users want to have an application which includes such features</p>
      <ul>
        <li>Authorization with login/password</li>
        <li>Authorization with social networks</li>
        <li>Private/Public areas (controllers/routes)</li>
        <li>Role based ACL</li>
        <li>Persisted sessions</li>
      </ul>

      <p>
        But unfortunately there were no good docs covering this part of framework. I mean there are, couple of pages in
        official documentation <ExternalLink href="https://docs.nestjs.com/guards">Guards</ExternalLink>,
        <ExternalLink href="https://docs.nestjs.com/techniques/authentication">Authentication</ExternalLink>;
        <ExternalLink href="https://dev.to/nestjs/authentication-and-sessions-for-mvc-apps-with-nestjs-55a4">
          one good article with code samples
        </ExternalLink>
        from @johnbiundo about local authorization; several closed issues and a few outdated blog posts. All these links
        did not give me a whole picture of how authorizations should be build.
      </p>

      <Typography component="h3" variant="h5">
        Solution
      </Typography>

      <p>
        This example is a fully functional
        <ExternalLink href="https://github.com/TrejGun/session-based-authorization-for-nestjs">
          boilerplate
        </ExternalLink>
        with all features mentioned above. It also includes some very basic tests, typeorm, migrations and utils. I
        tried to make it simple, so you can adjust it for your own needs
      </p>
    </div>
  );
};
