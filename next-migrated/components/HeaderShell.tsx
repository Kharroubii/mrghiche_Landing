"use client";

import { usePathname, useRouter } from "next/navigation";
import { Header } from "./ui/header-2";

export function HeaderShell() {
  const pathname = usePathname();
  const router = useRouter();

  const pageMap: Record<string, string> = {
    "/": "home",
    "/who-we-are": "who-we-are",
    "/portfolio": "portfolio",
    "/services": "services",
    "/news": "news",
    "/careers": "careers",
    "/contact": "contact",
    "/report-detail": "report-detail",
  };

  const handleNavigate = (id: string) => {
    if (id === "home") {
      router.push("/");
    } else {
      router.push(`/${id}`);
    }
  };

  return <Header activePage={pageMap[pathname] || "home"} onNavigate={handleNavigate} />;
}