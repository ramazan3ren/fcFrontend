import React from "react";
import { Element } from "react-scroll";
import {
  Map,
  InfoWindow,
  APIProvider,
  AdvancedMarker,
  Pin,
} from "@vis.gl/react-google-maps";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";

export const ContactsPart = () => {
  const position = { lat: 38.02, lng: 32.52 };
  return (
    <>
      <div className="w-full h-auto">
        <Element
          name="iletisim"
          className=" w-full element flex flex-col tablet:flex-row"
        >
          <div className="w-full tablet:w-2/4 h-96">
            <APIProvider apiKey={import.meta.env.VITE_GOOGLE_OAUTH_MAP}>
              <Map
                defaultZoom={100}
                fullscreenControl={false}
                gestureHandling={"greedy"}
                defaultCenter={position}
                mapId={import.meta.env.VITE_GOOGLE_MAP_ID}
              >
                <AdvancedMarker position={position} />
              </Map>
            </APIProvider>
          </div>
          <div className="w-full tablet:w-2/4 py-11 px-10  bg-fcGreen text-white">
            <h1 className="text-3xl font-bold text-white">İletişim</h1>
            <div className="flex flex-row px-10 py-5 items-center">
              <div className="">
                <CallRoundedIcon sx={{ width: "40px", height: "40px" }} />
              </div>
              <div className="font-bold ml-7 text-lg text-nowrap">
                +90 553 242 7501 <br /> +90 539 330 3193
              </div>
            </div>
            <div className="flex flex-row px-10 pb-5 items-center">
              <div className="">
                <MailRoundedIcon sx={{ width: "40px", height: "40px" }} />
              </div>
              <div className="font-bold ml-7 text-lg">
                support@fc.com <br /> info@fc.com
              </div>
            </div>
            <div className="flex flex-row px-10  items-center">
              <div className="">
                <LocationOnRoundedIcon sx={{ width: "40px", height: "40px" }} />
              </div>
              <div className="font-bold ml-7 text-lg">Selçuklu/Konya</div>
            </div>
          </div>
        </Element>
      </div>
    </>
  );
};
