import React, {FC} from "react";
import {Typography} from "@material-ui/core";
import {MyDate} from "../../components/common/date";
import {ExternalLink} from "../../components/common/external-link";

export const Page0018: FC = () => {
  return (
    <div>
      <MyDate date={"2020-11-09T05:47:12.624Z"} />
      <Typography component="h2" variant="h4">
        JWKS based authorization for Nest.js
      </Typography>

      <p>
        JWKS stands for JSON Web Key Sets which is basically JWT but little bit more complicated. So I was working on
        this type of auth recently and I find it really easy to implement. Just one thing: it is supported by Google and
        Apple but not by Facebook. Because Facebook as you know little bit special.
      </p>

      <p>
        As always you can find code in my
        <ExternalLink href="https://github.com/TrejGun/jwks-based-authorization-for-nestjs">github repo</ExternalLink>
      </p>
    </div>
  );
};
