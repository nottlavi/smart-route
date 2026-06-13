import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const ors_api = process.env.ORS_API_KEY;

  try {
    const res = await fetch(
      `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${ors_api}&start=77.2295,28.6129&end=77.2167,28.6315`,
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
