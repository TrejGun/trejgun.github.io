import React, {FC} from "react";
import {Typography} from "@material-ui/core";
import {ExternalLink} from "../components/common/external-link";


export const TermsAndConditions: FC = () => {
  return (
    <div>
      <Typography component="h2" variant="h4">
        Terms and conditions
      </Typography>

      <p>
        This is a static website with
        <ExternalLink href="https://github.com/TrejGun/trejgun.github.io">open source code</ExternalLink>. It is not
        using cookies and/or not collecting any personal data by itself. All articles and source code of this site are
        available for education purposes under MIT license
      </p>
      <p>
        Site also uses facebook`s comments, so facebook will track you, collect your data and use it for advertising
        purposes. This page exists only to fulfill facebook`s requirements.
      </p>
    </div>
  );
};
