import React, {FC, useState, ChangeEvent} from "react";
import {Typography, Input} from "@material-ui/core";

import {ExternalLink} from "../../components/common/external-link";
import {MyDate} from "../../components/common/date";
import {Comments} from "../../components/common/comments";
import {Map} from "./map";
import useStyles from "./styles";


export const Page0006: FC = () => {
  const classes = useStyles();
  const [warehouse, setWarehouse] = useState<any>(null);

  const [googleMapsApiKey, setGoogleMapsApiKey] = useState<string>("");
  const [novaPoshtaApiKey, setNovaPoshtaApiKey] = useState<string>("");

  return (
    <div>
      <MyDate date={"2019-11-10T13:20:19.556Z"} />
      <Typography component="h2" variant="h4">
        Nova Poshta Google Maps widget
      </Typography>

      <p>
        I`m working not only with Nest.js and server side JS in my practice, so today let me show you dead simple widget
        for selecting Nova Poshta warehouse on Google map, which obviously should have been written by Nova Poshta
        itself, but obviously had not been.
      </p>

      <p>You can play with example but have to enter your valid API keys.</p>

      <Input
        className={classes.input}
        placeholder={"Google Maps API key"}
        onChange={(e: ChangeEvent<HTMLInputElement>): void => setGoogleMapsApiKey(e.target.value)}
      />
      <Input
        className={classes.input}
        placeholder={"Nova Poshta API key"}
        onChange={(e: ChangeEvent<HTMLInputElement>): void => setNovaPoshtaApiKey(e.target.value)}
      />

      <br />

      <Map setWarehouse={setWarehouse} googleMapsApiKey={googleMapsApiKey} novaPoshtaApiKey={novaPoshtaApiKey} />

      <p>Selected: {warehouse ? warehouse.Description : "N/A"}</p>

      <p>
        This widget loads all warehouses of Nova Poshta which is about 13.5 Mb of data and renders about 5900 markers on
        the map. This is quite a lot and can cause significant performance degradation of you site, you were warned!
      </p>

      <p>
        As always you can find code in my
        <ExternalLink href="https://github.com/TrejGun/trejgun-nova-poshta-google-maps">github repo</ExternalLink>
      </p>

      <Comments slug="nova-poshta-google-maps-widget" />
    </div>
  );
};
