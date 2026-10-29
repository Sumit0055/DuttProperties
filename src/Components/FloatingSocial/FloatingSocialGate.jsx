"use client";

import { usePathname } from "next/navigation";
import FloatingSocial from "./FloatingSocial";

/**
 * The floating social panel is part of the site chrome, so it is mounted once
 * in the root layout. Only the two full-screen experiences opt out: the landing
 * splash ("/") and the intro sequence ("/intro").
 */
const ROUTES_WITHOUT_WIDGET = new Set(["/", "/intro"]);

function normalisePathname(pathname) {
  if (!pathname) return "/";

  const withoutTrailingSlash = pathname.replace(/\/+$/, "");

  return withoutTrailingSlash || "/";
}

export default function FloatingSocialGate() {
  const pathname = normalisePathname(usePathname());

  if (ROUTES_WITHOUT_WIDGET.has(pathname)) return null;

  return <FloatingSocial />;
}
