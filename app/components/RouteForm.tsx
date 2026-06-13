import { useState } from "react";

export default function RouteForm() {
  const [sourceCoords, setSourceCoords] = useState([]);

  return (
    <div className="p-6 bg-white text-black flex flex-col gap-4">
      <input type="text" placeholder="enter source (long, lat)" />
      <input type="text" placeholder="enter desitnation (long, lat)" />

      <button className="cursor-pointer">submit</button>
    </div>
  );
}
