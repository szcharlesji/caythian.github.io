import { NextResponse } from "next/server";
import { getArtworks } from "@/lib/actions/artworks";

export async function GET() {
  try {
    const artworks = await getArtworks();
    return NextResponse.json(artworks);
  } catch (error) {
    console.error("Error fetching artworks:", error);
    return NextResponse.json(
      { error: "Failed to fetch artworks" },
      { status: 500 }
    );
  }
}