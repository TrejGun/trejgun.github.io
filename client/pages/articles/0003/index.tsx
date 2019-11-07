import * as React from "react";
import {Link, Typography} from "@material-ui/core";
import {MyDate} from "../../components/common/date";
import {Code} from "../../components/common/code";
import server from "./server.txt";
import controller from "./controller.txt";
import {LinkAdapter} from "../../components/common/link-adapter";
import {Comments} from "../../components/common/comments";


export const Page0003: React.FC = () => {
  return (
    <div>
      <MyDate date={"2019-10-27T10:11:34.152Z"} />
      <Typography component="h2" variant="h4">
        Ethereum Server for Nest.js
      </Typography>

      <p>
        This is the second article about custom transports for Nest.js, you can find first one{" "}
        <Link component={LinkAdapter} to="/articles/custom-transport-for-nestjs">
          here
        </Link>
      </p>

      <p>
        Nets.js microservice can subscribe to events from any source, why not use a blockchain. In this example I will
        use Ethereum, but all other blockchains integration can be done easily using this pattern.
      </p>

      <p>Basic building block of any blockchain is a Block (deduction, man!) that is what server will listen to</p>

      <Code language="typescript">{server}</Code>

      <p>
        Block has a list of transaction`s ids. This mean in the real life you probably want to get full information
        about those transactions and process it somehow, but in this example controller just returns a list of
        transactions back. There is no actual need to return information about processed transactions because fully
        processed Block is not going to be removed from blockchain, but it is useful for logging
      </p>

      <Code language="typescript">{controller}</Code>

      <Comments slug="ethereum-server-for-nestjs" />
    </div>
  );
};
