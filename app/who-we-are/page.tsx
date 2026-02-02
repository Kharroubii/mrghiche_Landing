import type { Metadata } from "next";
import WhoWeAreClient from "./who-we-are-client";

export const metadata: Metadata = {
  title: "Who We Are — Our Firm & Mission",
  description: "Founded in 2019, Mrghiche Capital delivers disciplined, performance-driven asset management through innovation and institutional standards.",
  alternates: {
    canonical: "/who-we-are",
  },
};

export default function WhoWeAre() {
  return <WhoWeAreClient />;
}