import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const ors_api = process.env.ORS_API_KEY;
    const res = await fetch(
      `https://api.openrouteservice.org/geocode/autocomplete?api_key=${ors_api}&text=metro%20station&boundary.country=IN&boundary.rect.min_lon=76.83&boundary.rect.max_lon=77.34&boundary.rect.min_lat=28.40&boundary.rect.max_lat=28.89`,
    );

    const data = await res.json();

    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json(
      {
        error: "failed to fetch it",
      },
      { status: 500 },
    );
  }
}
