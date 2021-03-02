import React, {FC} from "react";
import {Link, Typography, ListItemText, ListItem, List} from "@material-ui/core";
import {LinkAdapter} from "../components/common/link-adapter";

export const Landing: FC = () => {
  return (
    <div>
      <Typography component="h2" variant="h4">
        Hello! I`m TrejGun and this is my blog :)
      </Typography>

      <List>
        <ListItem disableGutters>
          <ListItemText>
            <Link component={LinkAdapter} to="/articles/s3-module-for-nestjs">
              S3 module for Nest.js
            </Link>
          </ListItemText>
        </ListItem>
        <ListItem disableGutters>
          <ListItemText>
            <Link component={LinkAdapter} to="/articles/hot-potato-using-nestjs-microservices">
              Hot Potato using Nest.js microservices
            </Link>
          </ListItemText>
        </ListItem>
        <ListItem disableGutters>
          <ListItemText>
            <Link component={LinkAdapter} to="/articles/terminus-migration-guide">
              Terminus migration guide
            </Link>
          </ListItemText>
        </ListItem>
        <ListItem disableGutters>
          <ListItemText>
            <Link component={LinkAdapter} to="/articles/valid-code-with-5-reserved-words-in-a-row">
              Valid code with 5 reserved words in a row
            </Link>
          </ListItemText>
        </ListItem>
        <ListItem disableGutters>
          <ListItemText>
            <Link component={LinkAdapter} to="/articles/graphql-global-validation-pipeline-code-first">
              GraphQL global validation pipeline (code first)
            </Link>
          </ListItemText>
        </ListItem>
        <ListItem disableGutters>
          <ListItemText>
            <Link component={LinkAdapter} to="/articles/biometric-authentication-for-nestjs">
              Biometric authentication for Nest.js
            </Link>
          </ListItemText>
        </ListItem>
        <ListItem disableGutters>
          <ListItemText>
            <Link component={LinkAdapter} to="/articles/bindings-for-using-final-form-with-material-ui-autocomplete">
              Bindings for using Final Form with Material UI Autocomplete
            </Link>
          </ListItemText>
        </ListItem>
        <ListItem disableGutters>
          <ListItemText>
            <Link component={LinkAdapter} to="/articles/ssr-nextjs-authentication-for-graphql-nestjs-application">
              SSR Next.js authentication for GraphQL Nest.js application
            </Link>
          </ListItemText>
        </ListItem>
        <ListItem disableGutters>
          <ListItemText>
            <Link component={LinkAdapter} to="/articles/apollo-client-for-authorization-with-nestjs">
              Apollo client for authorization with Nest.js
            </Link>
          </ListItemText>
        </ListItem>
        <ListItem disableGutters>
          <ListItemText>
            <Link component={LinkAdapter} to="/articles/how-to-convert-http-exception-to-rpc-exception">
              How to convert HttpException to RpcException?
            </Link>
          </ListItemText>
        </ListItem>
        <ListItem disableGutters>
          <ListItemText>
            <Link component={LinkAdapter} to="/articles/collecting-data-from-workers-in-nestjs">
              Collecting data from workers in Nest.js
            </Link>
          </ListItemText>
        </ListItem>
        <ListItem disableGutters>
          <ListItemText>
            <Link component={LinkAdapter} to="/articles/nova-poshta-google-maps-widget">
              Nova Poshta Google Maps widget
            </Link>
          </ListItemText>
        </ListItem>
        <ListItem disableGutters>
          <ListItemText>
            <Link component={LinkAdapter} to="/articles/graphql-based-authorization-for-nestjs">
              GraphQL based authorization for Nest.js
            </Link>
          </ListItemText>
        </ListItem>
        <ListItem disableGutters>
          <ListItemText>
            <Link component={LinkAdapter} to="/articles/jwt-based-authorization-for-nestjs">
              JWT based authorization for Nest.js
            </Link>
          </ListItemText>
        </ListItem>
        <ListItem disableGutters>
          <ListItemText>
            <Link component={LinkAdapter} to="/articles/ethereum-server-for-nestjs">
              Ethereum Server for Nest.js
            </Link>
          </ListItemText>
        </ListItem>
        <ListItem disableGutters>
          <ListItemText>
            <Link component={LinkAdapter} to="/articles/session-based-authorization-for-nestjs">
              Session based authorization for Nest.js
            </Link>
          </ListItemText>
        </ListItem>
        <ListItem disableGutters>
          <ListItemText>
            <Link component={LinkAdapter} to="/articles/custom-transport-for-nestjs">
              Custom Transport for Nest.js
            </Link>
          </ListItemText>
        </ListItem>
        <ListItem disableGutters>
          <ListItemText>
            <Link component={LinkAdapter} to="/terms-and-conditions">
              Terms and Conditions
            </Link>
          </ListItemText>
        </ListItem>
        <ListItem disableGutters>
          <ListItemText>
            <Link component={LinkAdapter} to="/about">
              About this site
            </Link>
          </ListItemText>
        </ListItem>
        <ListItem disableGutters>
          <ListItemText>
            <Link component={LinkAdapter} to="/articles/jwks-based-authorization-for-nestjs">
              JWKS based authorization for Nest.js
            </Link>
          </ListItemText>
        </ListItem>
      </List>
    </div>
  );
};
