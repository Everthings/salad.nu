import React from "react";
import { Map, Circle, TileLayer } from "react-leaflet";
import { useSelector } from "react-redux";
import { getCurrentBuilding } from "./../../store/slices/search";

const LeafletMap = () => {
  const { lat, lon } = useSelector(getCurrentBuilding);

  const validLatLon = lat <= 90 && lat >= -90 && lon >= -180 && lon <= 180;
  const nuLatLon = [42.055984, -87.675171];

  const zoom = validLatLon ? 15.5 : 14;
  const position = validLatLon ? [lat, lon] : nuLatLon;

  return (
    <Map center={position} zoom={zoom} className="salad-container-maps">
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
      />
      {validLatLon && <Circle center={position} color="purple" radius={20} />}
    </Map>
  );
};

export default LeafletMap;
