import * as React from "react";
import {Link, Typography} from "@material-ui/core";
import {LinkAdapter} from "../components/common/link-adapter";


export const Landing: React.FC = () => {
  return (
    <div>
      <Typography component="h2" variant="h4">
        Hello! I`m TrejGun and this is my blog :)
      </Typography>

      <ul>
        <li>
          <Link component={LinkAdapter} to="/articles/graphql-based-authorization-for-nestjs">
            GraphQL based authorization for Nest.js
          </Link>
        </li>
        <li>
          <Link component={LinkAdapter} to="/articles/jwt-based-authorization-for-nestjs">
            JWT based authorization for Nest.js
          </Link>
        </li>
        <li>
          <Link component={LinkAdapter} to="/articles/ethereum-server-for-nestjs">
            Ethereum Server for Nest.js
          </Link>
        </li>
        <li>
          <Link component={LinkAdapter} to="/articles/session-based-authorization-for-nestjs">
            Session based authorization for Nest.js
          </Link>
        </li>
        <li>
          <Link component={LinkAdapter} to="/articles/custom-transport-for-nestjs">
            Custom Transport for Nest.js
          </Link>
        </li>
        <li>
          <Link component={LinkAdapter} to="/terms-and-conditions">
            Trams and Conditions
          </Link>
        </li>
        <li>
          <Link component={LinkAdapter} to="/about">
            About this site
          </Link>
        </li>
      </ul>
    </div>
  );
};
