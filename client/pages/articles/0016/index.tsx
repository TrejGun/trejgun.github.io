import React, {FC} from "react";
import {Typography} from "@material-ui/core";
import {MyDate} from "../../components/common/date";
import {ExternalLink} from "../../components/common/external-link";

export const Page0016: FC = () => {
  return (
    <div>
      <MyDate date={"2020-05-25T08:50:02.583Z"} />
      <Typography component="h2" variant="h4">
        Hot Potato using Nest.js microservices
      </Typography>

      <p>
        Hey guys, just made an example of microservice architecture using Nest.js and RabbitMQ. Orchestrator pushes
        message to queue and then players are trying to process it with 3 instances. The one who failed on random
        condition is displayed as looser.
      </p>

      <p>
        As always you can find code in my
        <ExternalLink href="https://github.com/TrejGun/hot-potato-using-nestjs-microservices">github repo</ExternalLink>
      </p>
    </div>
  );
};
