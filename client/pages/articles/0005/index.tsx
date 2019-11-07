import * as React from "react";
import {Typography} from "@material-ui/core";
import {ExternalLink} from "../../components/common/external-link";
import {MyDate} from "../../components/common/date";
import {Comments, FacebookProvider} from "react-facebook";


export const Page0005: React.FC = () => {
  return (
    <div>
      <MyDate date={"2019-11-03T14:56:19.626Z"} />
      <Typography component="h2" variant="h4">
        GraphQL based authorization for Nest.js
      </Typography>

      <p>
        This is already third article in a row about authorization in Nest.js. It is still the same codebase but instead
        of @Controllers it uses @Resolvers, all other stuff is pretty straight forward. User has to call GraphQL
        mutation using his email and password to obtain JWT accessToken and refreshToken. Then he has to put it in
        Bearer authentication header which will be processed by passport.js and resolved back into user. This user would
        be available in all Queries/Mutations using @User decorator. Decorators and Guards are a bit different for
        GraphQL but works in the same way so you would not even notice a difference in coding.
      </p>

      <p>
        As always you can find code in my{" "}
        <ExternalLink href="https://github.com/TrejGun/graphql-based-authorization-for-nestjs">
          github repo
        </ExternalLink>
      </p>

      <FacebookProvider appId={process.env.FACEBOOK_CLIENT_ID}>
        <Comments href="https://trejgun.github.io/articles/graphql-based-authorization-for-nestjs" />
      </FacebookProvider>
    </div>
  );
};
