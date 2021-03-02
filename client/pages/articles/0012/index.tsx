import React, {FC} from "react";
import {Link, Typography} from "@material-ui/core";
import {MyDate} from "../../components/common/date";
import {Code} from "../../components/common/code";
import biometric from "./biometric.txt";
import ssh from "./ssh.txt";
import {ExternalLink} from "../../components/common/external-link";
import {LinkAdapter} from "../../components/common/link-adapter";

export const Page0012: FC = () => {
  return (
    <div>
      <MyDate date={"2019-11-29T19:23:19.556Z"} />
      <Typography component="h2" variant="h4">
        Biometric authentication for Nest.js
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

      <p>
        New code is built on top of <em>passport-local</em> authentication strategy and is interesting only in part
        where it verifies payload, so here is full algorithm with explanations
      </p>

      <Code language="typescript">{biometric}</Code>

      <p>
        Biometric strategy was added to my old code sample for article
        <Link component={LinkAdapter} to="/articles/session-based-authorization-for-nestjs">
          Session based authorization for Nest.js
        </Link>
        but in fact it can return JWToken instead of saving user to session.
      </p>
    </div>
  );
};
