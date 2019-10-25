import * as React from "react";
import {Link} from "@material-ui/core";
import {LinkAdapter} from "../components/common/link-adapter";


export const Landing: React.FC = () => {
  return (
    <div>
      <h2>Hello! I`m TrejGun and this is my blog :)</h2>

      <ul>
        <li>
          <Link component={LinkAdapter} to="/articles/tutorial-custom-transport-for-nestjs">
            Tutorial: Custom Transport for Nest.js
          </Link>
        </li>
      </ul>
    </div>
  );
};
