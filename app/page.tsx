import type { Metadata } from "next";
import HomeContent from "./home-content";

export const metadata: Metadata = {
  title: "Mrghiche Capital — Institutional Investment Management",
  description: "Strategic investment management firm applying institutional discipline to protect capital and generate long-term returns.",
};

export default function Home() {
  return <HomeContent />;
}