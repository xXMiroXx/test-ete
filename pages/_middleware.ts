import type { NextFetchEvent, NextRequest } from "next/server";

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  if (req.geo?.country === "CZ") new Response("Server Down");
}
