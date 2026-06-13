"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Map = dynamic(() => import("../app/components/Map"), {
  ssr: false,
});

export default function Home() {
  const [coordinates, setCoordinates] = useState<number[][]>([]);

  useEffect(() => {
    async function getRoute() {
      const res = await fetch("/api/route");
      const data = await res.json();

      setCoordinates(data?.features[0]?.geometry?.coordinates);
    }

    getRoute();
  }, []);

  return <Map coordinates={coordinates} />;
}
