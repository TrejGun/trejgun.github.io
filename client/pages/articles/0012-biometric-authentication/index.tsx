import React, {FC} from "react";
import {Typography} from "@material-ui/core";

import {MyDate} from "../../components/common/date";
import {Code} from "../../components/common/code";
import {ExternalLink} from "../../components/common/external-link";

import biometric from "./biometric.txt";
import ssh from "./ssh.txt";

export const Page0012: FC = () => {
  return (
    <div>
      <MyDate date={"2019-11-29T19:23:19.556Z"} />
      <Typography component="h2" variant="h4">
        Biometric authentication
      </Typography>

      <p>
        I call it <em>biometric</em> because it was developed as a backend to native react app which uses
        <ExternalLink href={"https://github.com/SelfLender/react-native-biometrics"}>
          react-native-biometrics
        </ExternalLink>{" "}
        package. In fact this is authentication by asymmetric keys, which are protected on mobile devices with
        fingerprint scanner of face recognition technology. Yup can get same key from your system by executing next sh
        command, this will not override your existing key but will print it in PKCS8 format.
      </p>

      <Code language="bash">{ssh}</Code>

      <p>Here is full algorithm of how to generate and verify signature with explanations</p>

      <Code language="typescript">{biometric}</Code>

      <p>
        You can check this in action as a part of my
        <ExternalLink href="https://github.com/GemunIon/nestjs-auth">demo repository</ExternalLink>
        with authorization examples
      </p>
    </div>
  );
};
