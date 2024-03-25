import React from "react";
import { Element } from "react-scroll";
import {
  Map,
  InfoWindow,
  APIProvider,
  AdvancedMarker,
  Pin,
} from "@vis.gl/react-google-maps";

export const ContactsPart = () => {
  const position = { lat: 38.02, lng: 32.5 };
  return (
    <>
      <div className="w-full h-96">
        <Element name="iletisim" className="element flex flex-row">
          <div className="w-2/4 h-96">
            <APIProvider apiKey={import.meta.env.VITE_GOOGLE_OAUTH_MAP}>
              <Map
                zoom={100}
                defaultCenter={position}
                mapId={import.meta.env.VITE_GOOGLE_MAP_ID}
              >
                <AdvancedMarker
                  title={"Emre Güngör"}
                  className="bg-fcGreen"
                  position={position}
                />
              </Map>
            </APIProvider>
          </div>
          <div className="w-2/4">
            <h1>İletişim</h1>
          </div>
        </Element>
      </div>
    </>
  );
};
