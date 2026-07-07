import React from "react";
import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps";
import { CiMapPin } from "react-icons/ci";

function MiaMappa() {
  const position = { lat: 43.553203, lng: 10.332358 };

  return (
    <APIProvider apiKey={"AIzaSyDXgimn-TVmpIWMPmSCcm1yhQuN2dLIscA"}>
      <div className="flex flex-col gap-5">
        <li className="flex items-center gap-6">
          <div className="bg-[#FDFCF9] p-2 rounded-4xl text-[#C47048] text-xl shrink-0">
            <CiMapPin className="text-icon-main shrink-0" />
          </div>
          <div>
            <h4 className="text-stitle-size font-semibold">Sede legale</h4>
            <a
              href="https://www.google.com/maps/place/Via+Alessandro+Pannocchia,+22,+57124+Livorno"
              className="underline decoration-transparent hover:decoration-[#C47048] transition-colors duration-300" target="black"
            >
              Via Alessandro Pannocchia, 22 57124 Livorno (LI) - Italia
            </a>
          </div>
        </li>

        <div className="flex flex-col gap-5 rounded-2xl overflow-hidden">
          <Map
            style={{ width: "100%", height: "300px" }}
            defaultCenter={position}
            defaultZoom={15}
            mapId={"c34ed8ff1702637a1f8854fc"}
            options={{
              mapTypeControl: false,
              fullscreenControl: false,
              streetViewControl: false,
              rotateControl: false,
              zoomControl: false,
            }}
          >
            <AdvancedMarker position={position} />
          </Map>
        </div>
      </div>
    </APIProvider>
  );
}

export default MiaMappa;
