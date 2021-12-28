import type { NextFetchEvent, NextRequest } from "next/server";

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  switch (req.geo?.country) {
    case "CZ":
      return new Response("Server Down");
  }
}
