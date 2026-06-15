import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const ors_api = process.env.ORS_API_KEY;

  try {
    const res = await fetch(
      `https://api.openrouteservice.org/geocode/search?api_key=${ors_api}&text=Namibian%20Brewery`,
    );

    const data = await res.json();

    return NextResponse.json(data);
  } catch (err) {
    console.error("API Error:", err);

    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 },
    );
  }
}
