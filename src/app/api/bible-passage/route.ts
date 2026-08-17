import { NextResponse } from "next/server";
import { resolveBibleReference } from "@/lib/bibleReference";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const reference = searchParams.get("reference")?.trim();

  if (!reference || reference.length > 120) {
    return NextResponse.json(
      { message: "Informe uma referência bíblica válida." },
      { status: 400 },
    );
  }

  const response = NextResponse.json(resolveBibleReference(reference));
  response.headers.set(
    "Cache-Control",
    "public, max-age=86400, stale-while-revalidate=604800",
  );

  return response;
}
