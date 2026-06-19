"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import RouteForm from "./components/RouteForm";

const Map = dynamic(() => import("../app/components/Map"), {
  ssr: false,
});

export default function Home() {
  const [coordinates1, setCoordinates1] = useState<number[][]>([]);
  const [coordinates2, setCoordinates2] = useState<number[][]>([]);
  const [coordinates3, setCoordinates3] = useState<number[][]>([]);
  const [source, setSource] = useState<string>("");
  const [dest, setDest] = useState<string>("");
  const [sourceCoord, setSourceCoord] = useState<string>("");
  const [destCoord, setDestCoord] = useState<string>("");

  async function getCoords() {
    //will need two api calls here
    //for source
    const res1 = await fetch(`/api/geocoder?place=${source}`);
    const data1 = await res1.json();
    setSourceCoord(data1);

    //for destination
    const res2 = await fetch(`/api/geocoder?place=${dest}`);
    const data2 = await res2.json();

    setDestCoord(data2);
  }

  useEffect(() => {
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

      console.log(data.features.length);

      setCoordinates1(data?.features[0]?.geometry?.coordinates);
      setCoordinates2(data?.features[1]?.geometry?.coordinates);
      setCoordinates3(data?.features[2]?.geometry?.coordinates);
    }

    if (sourceCoord && destCoord) getRoute();
  }, [sourceCoord, destCoord]);

  return (
    <div className="flex">
      <RouteForm
        source={source}
        setSource={setSource}
        dest={dest}
        setDest={setDest}
        getCoords={getCoords}
      />
      <Map
        coordinates1={coordinates1}
        coordinates2={coordinates2}
        coordinates3={coordinates3}
      />
    </div>
  );
}
