import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const ors_api = process.env.ORS_API_KEY;
  const { start, end } = await request.json();

  console.log("hey im being called");

  console.log(start, end);

  try {
    const res = await fetch(
      `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${ors_api}&start=${start}&end=${end}`,
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
