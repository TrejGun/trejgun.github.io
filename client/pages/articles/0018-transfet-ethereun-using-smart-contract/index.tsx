import React, {FC} from "react";
import {Typography} from "@material-ui/core";
import {MyDate} from "../../components/common/date";
import {Code} from "../../components/common/code";

import receive from "./receive.txt";
import deposite from "./deposite.txt";
import receiveEmit from "./receive-emit.txt";
import sendTransaction from "./send-transaction.txt";
import sendWithdraw from "./send-withdraw.txt";
import sendDeposite from "./send-deposite.txt";
import withdraw from "./withdraw.txt";

export const Page0018: FC = () => {
  return (
    <div>
      <MyDate date={"2020-06-05T13:10:27.733Z"} />
      <Typography component="h2" variant="h4">
        Transfer ETH using smart contracts
      </Typography>

      <p>With this article, we begin a series of articles devoted to transferring assets within the blockchain.</p>

      <h3>Case 1: Transfer ETH from wallet to smart contract</h3>

      <p>
        Ethereum provides special function called `receive` or fallback function to receive any amount of ethereal sent
        to contract
      </p>

      <Code language="typescript">{receive}</Code>

      <p>You can call this function using ethers.js by simply sending ETH to address of contract</p>

      <Code language="typescript">{sendTransaction}</Code>

      <p>
        And this will work unless you are going to add some logic to it. For example by simple adding event emitting you
        run out of gas limit which is only 2300
      </p>

      <Code language="typescript">{receiveEmit}</Code>

      <p>In this case you have to create special function with allows you to deposit ETH like so</p>

      <Code language="typescript">{deposite}</Code>

      <p>To invoke this function and transfer some ETH simultaneously you will have to use next piece of code</p>

      <Code language="typescript">{sendDeposite}</Code>

      <h3>Case 1: Withdrawingr ETH from smart contract to wallet</h3>

      <p>The first approach everybody think of is this</p>

      <Code language="typescript">{withdraw}</Code>

      <p>
        But this won`t work either, because balance could be changed during execution. So you have to rewrite this code
        using not so obvious construction
      </p>

      <Code language="typescript">{withdraw}</Code>

      <p>Then you can call it with ethers</p>

      <Code language="typescript">{sendWithdraw}</Code>
    </div>
  );
};
