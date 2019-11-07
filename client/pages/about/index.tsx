import * as React from "react";
import {Typography} from "@material-ui/core";
import {MyDate} from "../components/common/date";
import {ExternalLink} from "../components/common/external-link";


export const About: React.FC = () => {
  return (
    <div>
      <MyDate date={"2019-11-03T15:25:20.324Z"} />
      <Typography component="h2" variant="h4">
        About this site
      </Typography>

      <p>
        I used to code js for pretty long time, and was quite tired of doing same stuff over and over again. At some
        point I even thought server side js have faced some stagnation. An then someone, some where mentioned
        <ExternalLink href="https://nestjs.com/">Nest.js</ExternalLink>, one month later I tried it and felt in love.
        Unfortunately it looks like the documentation is not as great as framework itself, so I decided to to add my 2
        cents to popularization on this awesome framework. Once I already had blog about coding and other related stuff,
        so I decided to make second attempt, and post here some tutorials and gotchas
      </p>
    </div>
  );
};
