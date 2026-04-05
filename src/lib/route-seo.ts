import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/site";

/** Canonical URL + Open Graph URL for the route (e.g. "/" or "/services"). */
export function routeSeo(pathname: string): Pick<Metadata, "alternates" | "openGraph"> {
  const site = getSiteUrl().replace(/\/$/, "");
  const path = pathname === "/" ? "/" : `/${pathname.replace(/^\//, "")}`;
  const url = `${site}${path}`;

  return {
    alternates: { canonical: url },
    openGraph: { url },
  };
}
