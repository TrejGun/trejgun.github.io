import React, {FC} from "react";
import {Typography} from "@material-ui/core";
import {ExternalLink} from "../../components/common/external-link";
import {MyDate} from "../../components/common/date";
import {Code} from "../../components/common/code";
import resolver from "./resolver.txt";
import login from "./login.txt";

export const Page0005: FC = () => {
  return (
    <div>
      <MyDate date={"2019-11-03T14:56:19.626Z"} />
      <Typography component="h2" variant="h4">
        GraphQL based authorization for Nest.js
      </Typography>

      <p>
        This is already third article in a row about authorization in Nest.js. It is still the same codebase but instead
        of @Controllers it uses @Resolvers, all other stuff is pretty straight forward.
      </p>

      <Code language="typescript">{resolver}</Code>

      <p>User has to call GraphQL mutation using his email and password to obtain JWT accessToken and refreshToken.</p>

      <Code language="graphql">{login}</Code>

      <p>
        Then he has to put accessToken in Bearer authentication header which will be processed by passport.js and
        resolved back into user. This user would be available in all Queries/Mutations using @User decorator. See first
        code sample.
      </p>

      <p>
        Decorators and Guards are implemented a little bit different for GraphQL but works in the same way so you would
        not even notice a difference in coding.
      </p>

      <p>
        As always you can find code in my
        <ExternalLink href="https://github.com/TrejGun/graphql-based-authorization-for-nestjs">
          github repo
        </ExternalLink>
      </p>
    </div>
  );
};
