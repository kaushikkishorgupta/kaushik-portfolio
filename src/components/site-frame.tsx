"use client";

import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import Header from "@/components/header/header";
import AppOverlays from "@/components/app-overlays";

const Footer = dynamic(() => import("@/components/footer/footer"), {
  ssr: false,
});

/**
 * Wraps the app shell. The `/components*` showcase routes are rendered
 * "bare" (no header / footer / decorative overlays) so the component
 * galleries can be judged in isolation. Everything else gets full chrome.
 */
export default function SiteFrame({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const bare = pathname?.startsWith("/components") ?? false;

  if (bare) return <>{children}</>;

  return (
    <>
      <Header />
      {children}
      <Footer />
      <AppOverlays />
    </>
  );
}
