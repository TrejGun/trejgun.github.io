import * as React from "react";
import {NovaPoshtaMap} from "@trejgun/nova-poshta-google-maps";
import {Typography, CircularProgress} from "@material-ui/core";

import {ExternalLink} from "../../components/common/external-link";
import {MyDate} from "../../components/common/date";
import {Comments} from "../../components/common/comments";
import useStyles from "./styles";


export const Page0006: React.FC = () => {
  const classes = useStyles();
  const [warehouse, setWarehouse] = React.useState<any>(null);

  const getCoordinates = (setCoordinates: (coordinates: any) => {}, onError: PositionErrorCallback): void => {
    window.navigator.geolocation.getCurrentPosition(position => {
      setCoordinates({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    }, onError);
  };

  return (
    <div>
      <MyDate date={"2019-11-03T11:49:19.556Z"} />
      <Typography component="h2" variant="h4">
        Nova Poshta Google Maps widget
      </Typography>

      <p>
        I`m working not only with Nest.js and server side JS in my practice, so today let me show you dead simple widget
        for selecting Nova Poshta warehouse on Google map, which obviously should have been written by Nova Poshta
        itself, but obviously had not been.
      </p>

      <NovaPoshtaMap
        onError={console.error.bind(console)}
        googleMapsApiKey="AIzaSyAbdx-pji0rQcRzfFwjRK_f8e9qmULLHyo"
        novaPoshtaApiKey="37dd619051dc066c7a22a1f149032ffd"
        className={classes.map}
        onSelect={setWarehouse}
        getCoordinates={getCoordinates}
        options={{
          zoomControlOptions: {
            position: "RIGHT_CENTER",
          },
        }}
      >
        <CircularProgress className={classes.spinner} />
      </NovaPoshtaMap>

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
