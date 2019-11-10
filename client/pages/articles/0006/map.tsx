import * as React from "react";
import {NovaPoshtaMap} from "@trejgun/nova-poshta-google-maps";
import {CircularProgress} from "@material-ui/core";
import useStyles from "./styles";


interface IMapProps {
  setWarehouse: (warehouse: any) => void;
  googleMapsApiKey: string;
  novaPoshtaApiKey: string;
}

export const Map: React.FC<IMapProps> = ({setWarehouse, googleMapsApiKey, novaPoshtaApiKey}) => {
  const classes = useStyles();

  const getCoordinates = (setCoordinates: (coordinates: any) => {}, onError: PositionErrorCallback): void => {
    setCoordinates({
      lat: 50.45466,
      lng: 30.5238,
    }); // Kyiv
    window.navigator.geolocation.getCurrentPosition(position => {
      setCoordinates({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    }, onError);
  };

  if (!googleMapsApiKey || !novaPoshtaApiKey) {
    return null;
  }

  if (navigator.userAgent === "ReactSnap") {
    return null;
  }

  return (
    <NovaPoshtaMap
      onError={console.error.bind(console)}
      googleMapsApiKey={googleMapsApiKey}
      novaPoshtaApiKey={novaPoshtaApiKey}
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
  );
};
