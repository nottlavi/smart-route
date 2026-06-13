"use client";

import { MapContainer, TileLayer, Polyline } from "react-leaflet";

export default function Map({ coordinates }: { coordinates: number[][] }) {
  const leafletCoords: [number, number][] = coordinates.map(([lng, lat]) => [
    lat,
    lng,
  ]);

  console.log("Polyline points:", leafletCoords);

  return (
    <MapContainer
      center={[28.6139, 77.209]}
      zoom={13}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      <Polyline
        positions={[
          [28.6139, 77.209],
          [28.6239, 77.219],
        ]}
      />
    </MapContainer>
  );
}
