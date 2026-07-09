"use client";

import { usePathname } from "next/navigation";
import { SubpageHeader, EditorialFooter } from "@/components/home/home-experience";

export function MarketingShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  if (isHome) return <>{children}</>;

  return (
    <>
      <SubpageHeader />
      <main className="ed-subpage-main">{children}</main>
      <EditorialFooter />
    </>
  );
}
