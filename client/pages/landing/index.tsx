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
          <Link component={LinkAdapter} to="/articles/ethereum-server-for-nestjs">
            Ethereum Server for Nest.js
          </Link>
        </li>
        <li>
          <Link component={LinkAdapter} to="/articles/nestjs-authorization">
            Authorization in Nest.js
          </Link>
        </li>
        <li>
          <Link component={LinkAdapter} to="/articles/custom-transport-for-nestjs">
            Custom Transport for Nest.js
          </Link>
        </li>
      </ul>
    </div>
  );
};
