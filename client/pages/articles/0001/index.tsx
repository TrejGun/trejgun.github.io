import * as React from "react";
import {Typography} from "@material-ui/core";
import {ExternalLink} from "../../components/common/external-link";
import {MyDate} from "../../components/common/date";
import {Code} from "../../components/common/code";
import {Comments} from "../../components/common/comments";
import ticker from "./ticker.txt";
import server from "./server.txt";
import controller from "./controller.txt";


export const Page0001: React.FC = () => {
  return (
    <div>
      <MyDate date={"2019-10-25T17:42:20.324Z"} />
      <Typography component="h2" variant="h4">
        Custom Transport for Nest.js
      </Typography>

      <p>
        Yesterday I tried to implement <em>CustomTransportStrategy</em> for Nest.js and after googling for half an hour
        I realize there are only examples for RabbitMQ like this
        <ExternalLink href="https://github.com/AlariCode/nestjs-rmq">nestjs-rmq</ExternalLink>, which is already
        included in <em>@nestjs/microservice</em> package. But there were nothing simple where one can see a logic
        related only to Nest.js itself until now
      </p>

      <p>
        For this example I will implement simple <em>EventEmitter</em> using setInterval, which emits timestamp each
        second, but in real life it could be anything like TCP calls, queue in any kind of SQL/NOSQL database, ZeroMQ,
        AWS SQS or Google pub/sub
      </p>

      <Code language="typescript">{ticker}</Code>

      <p>
        Now a listener should be attached to listen to this <em>Ticker</em> events (timestamp) and pass them to
        corresponding handler. For this I have to implement only two methods <em>listen</em> and <em>close</em>.
      </p>

      <Code language="typescript">{server}</Code>

      <p>
        But the docs are silent about how to path event to controller. Event listeners of all controllers are stored in
        <em>messageHandlers</em> property. It also looks like it makes no sense to path object as event pattern because
        it is just stringified.
      </p>

      <p>
        Finally here is a controller to handle <em>TICK</em> message, it is dead simple. The value returned from
        controller can be used to remove message from queue.
      </p>

      <Code language="typescript">{controller}</Code>

      <p>This is all for today, good luck with your code!</p>

      <Comments slug="custom-transport-for-nestjs" />
    </div>
  );
};
