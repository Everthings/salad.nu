import React from "react";
import { useSelector } from "react-redux";
import { Map, Circle, TileLayer } from "react-leaflet";
import { getCurrentBuilding } from "./../../store/slices/interactions";

const style = {
  backgroundColor: "#94128dd8",
  borderTopLeftRadius: "0px",
  borderTopRightRadius: "0px",
  borderBottomLeftRadius: "1rem",
  borderBottomRightRadius: "1rem",
  height: "25vh",
  width: "100%",
  zIndex: "0",
};

const CampusMap = () => {
  const { lat, lon } = useSelector(getCurrentBuilding);

  const validLatLon =
    lat && lon && lat <= 90 && lat >= -90 && lon >= -180 && lon <= 180;
  const nuLatLon = [42.055909, -87.672709];

  const zoom = validLatLon ? 14 : 14; // no zoom change as it can be disorientating
  const position = validLatLon ? [lat, lon] : nuLatLon;

  return (
    <Map
      center={position}
      zoom={zoom}
      attributionControl={false}
      zoomAnimationThreshold={10}
      style={style}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
      />
      {validLatLon && <Circle center={position} color="purple" radius={30} />}
    </Map>
  );
};

export default CampusMap;
