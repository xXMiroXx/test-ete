import type { NextFetchEvent, NextRequest } from "next/server";

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  if (req.geo?.country === "CZ") return new Response("Server Down");
}
