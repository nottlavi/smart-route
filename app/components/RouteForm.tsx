import React, { useEffect, useState } from "react";

type RouteFormProps = {
  sourceCoord: string;
  setSourceCoord: React.Dispatch<React.SetStateAction<string>>;
  destCoord: string;
  setDestCoord: React.Dispatch<React.SetStateAction<string>>;
  getRoute: () => void;
};

export default function RouteForm({
  sourceCoord,
  setSourceCoord,
  destCoord,
  setDestCoord,
  getRoute,
}: RouteFormProps) {
  const [blockSub, setBlockSub] = useState(true);

  useEffect(() => {
    if (sourceCoord && destCoord) {
      setBlockSub(false);
    } else {
      setBlockSub(true);
    }
  }, [sourceCoord, destCoord]);

  return (
    <div className="p-6 bg-white text-black flex flex-col gap-4">
      <input
        type="text"
        placeholder="enter source (long, lat)"
        value={sourceCoord}
        onChange={(e) => setSourceCoord(e.target.value)}
      />
      <input
        type="text"
        placeholder="enter desitnation (long, lat)"
        value={destCoord}
        onChange={(e) => setDestCoord(e.target.value)}
      />

      <button
        className={`cursor-pointer ${blockSub ? "opacity-50" : ""}`}
        onClick={getRoute}
        disabled={blockSub}
      >
        submit
      </button>
    </div>
  );
}
