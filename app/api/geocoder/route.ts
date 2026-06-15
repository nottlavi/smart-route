import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const ors_api = process.env.ORS_API_KEY;
  const { searchParams } = new URL(request.url);

  const place = searchParams.get("place");

  console.log(place);

  try {
    const res = await fetch(
      `https://api.openrouteservice.org/geocode/search?api_key=${ors_api}&text=${place}`,
    );

    const data = await res.json();

    return NextResponse.json(data?.features[0]?.geometry?.coordinates);
  } catch (err) {
    console.error("API Error:", err);

    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 },
    );
  }
}
