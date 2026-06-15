import React, { useEffect, useState } from "react";

type RouteFormProps = {
  source: string;
  setSource: React.Dispatch<React.SetStateAction<string>>;
  dest: string;
  setDest: React.Dispatch<React.SetStateAction<string>>;
  getCoords: () => void;
};

export default function RouteForm({
  source,
  setSource,
  dest,
  setDest,
  getCoords,
}: RouteFormProps) {
  const [blockSub, setBlockSub] = useState(true);

  useEffect(() => {
    if (source && dest) {
      setBlockSub(false);
    } else {
      setBlockSub(true);
    }
  }, [source, dest]);

  return (
    <div className="p-6 bg-white text-black flex flex-col gap-4">
      <input
        type="text"
        placeholder="enter source"
        value={source}
        onChange={(e) => setSource(e.target.value)}
      />
      <input
        type="text"
        placeholder="enter desitnation"
        value={dest}
        onChange={(e) => setDest(e.target.value)}
      />

      <button
        className={`${blockSub ? "opacity-50 " : "cursor-pointer"}`}
        onClick={getCoords}
        disabled={blockSub}
      >
        submit
      </button>
    </div>
  );
}
