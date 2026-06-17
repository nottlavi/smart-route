"use client";

import { MapContainer, TileLayer, Polyline } from "react-leaflet";

export default function Map({
  coordinates1,
  coordinates2,
  coordinates3,
}: {
  coordinates1: number[][];
  coordinates2: number[][];
  coordinates3: number[][];
}) {
  const leafletCoords1: [number, number][] = coordinates1.map(([lng, lat]) => [
    lat,
    lng,
  ]);

  const leafletCoords2: [number, number][] = coordinates2.map(([lng, lat]) => [
    lat,
    lng,
  ]);

  const leafletCoords3: [number, number][] = coordinates3.map(([lng, lat]) => [
    lat,
    lng,
  ]);

  return (
    <MapContainer
      center={[28.6139, 77.209]}
      zoom={13}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      <Polyline positions={leafletCoords1} color="red" />
      <Polyline positions={leafletCoords2} color="blue" />
      <Polyline positions={leafletCoords3} color="yellow" />
    </MapContainer>
  );
}
