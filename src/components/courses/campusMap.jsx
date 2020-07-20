import React from "react";
import { Map, Circle, TileLayer } from "react-leaflet";
import { useSelector } from "react-redux";
import { getCurrentBuilding } from "../../store/slices/search";

const CampusMap = () => {
  const { lat, lon } = useSelector(getCurrentBuilding);

  const validLatLon = lat <= 90 && lat >= -90 && lon >= -180 && lon <= 180;
  const nuLatLon = [42.055909, -87.672709];

  const zoom = validLatLon ? 14 : 14; // no zoom change as it can be disorientating
  const position = validLatLon ? [lat, lon] : nuLatLon;

  return (
    <Map
      center={position}
      zoom={zoom}
      attributionControl={false}
      zoomAnimationThreshold={10}
      className="salad-container-maps"
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
