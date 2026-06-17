import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const ors_api = process.env.ORS_API_KEY;

  if (!ors_api) {
    console.error("Missing ORS_API_KEY in environment variables");
    return NextResponse.json(
      { error: "Server misconfiguration" },
      { status: 500 },
    );
  }

  try {
    const { start, end } = await request.json();

    const res = await fetch(
      `https://api.openrouteservice.org/v2/directions/driving-car/geojson`,
      {
        method: "POST",
        headers: {
          Authorization: ors_api,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          coordinates: [start, end],
          alternative_routes: {
            target_count: 3,
            share_factor: 0.6,
            weight_factor: 1.4,
          },
        }),
      },
    );

    const data = await res.json();

    return NextResponse.json(data);
  } catch (err) {
    console.error("Route Handler Exception:", err);
    return NextResponse.json(
      { error: "Failed to fetch route" },
      { status: 500 },
    );
  }
}
