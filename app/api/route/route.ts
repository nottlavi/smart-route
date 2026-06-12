import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const ors_api = process.env.ORS_API_KEY;

  try {
    const res = await fetch(
      `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${ors_api}&start=8.681495,49.41461&end=8.687872,49.420318`,
    );

    const data = await res.json();

    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to fetch route" },

      { status: 500 },
    );
  }
}
