"use client";

import { useRouter } from "next/navigation";
import Footer4Col from "@/components/ui/footer-4-col";

export function FooterShell() {
  const router = useRouter();

  const handleNavigate = (id: string) => {
    if (id === "home") {
      router.push("/");
    } else {
      router.push(`/${id}`);
    }
  };

  return <Footer4Col onNavigate={handleNavigate} />;
}