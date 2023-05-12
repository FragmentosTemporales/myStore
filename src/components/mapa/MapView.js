import React, { useRef, useEffect } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './mapa.css'
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-icon.png'
import L from 'leaflet'

let iconUbication = new L.icon({
  iconUrl: icon,
  iconShadow: iconShadow,
  iconSize: [40, 60],
  iconAnchor: [22,94],
  shadowAnchor: [22,94],
  popupAnchor: [-3, -76]
});

const MapView = () => {
  function LocationMarker() {
    const map = useMap();
    const markerRef = useRef(null);

    useEffect(() => {
      if (markerRef.current) {
        map.flyTo(markerRef.current.getLatLng(), map.getZoom());
      }
    }, [map]);

    return (
      <Marker position={[-33.487091, -70.644732]} icon={iconUbication} ref={markerRef}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    );
  }

  return (
    <MapContainer 
    className="mapa" center={[-33.487091, -70.644732]} zoom={13} scrollWheelZoom={true}>
      <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' 
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <LocationMarker />
    </MapContainer>
  );
};

export default MapView;
