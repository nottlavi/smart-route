"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import RouteForm from "./components/RouteForm";

const Map = dynamic(() => import("../app/components/Map"), {
  ssr: false,
});

export default function Home() {
  const [coordinates, setCoordinates] = useState<number[][]>([]);
  const [sourceCoord, setSourceCoord] = useState<string>("");
  const [destCoord, setDestCoord] = useState<string>("");

  async function getRoute() {
    const res = await fetch("/api/route", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        start: sourceCoord,
        end: destCoord,
      }),
    });
    const data = await res.json();

    setCoordinates(data?.features[0]?.geometry?.coordinates);
  }

  return (
    <div className="flex">
      <RouteForm
        sourceCoord={sourceCoord}
        setSourceCoord={setSourceCoord}
        destCoord={destCoord}
        setDestCoord={setDestCoord}
        getRoute={getRoute}
      />
      <Map coordinates={coordinates} />
    </div>
  );
}
