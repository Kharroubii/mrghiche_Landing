import type { Metadata } from "next";
import PortfolioClient from "./portfolio-client";

export const metadata: Metadata = {
  title: "Strategic Portfolio — Global Institutional Investments",
  description: "Explore our selection of high-impact institutional investments across key asset classes including Real Estate, Tech, and Sustainability.",
  alternates: {
    canonical: "/portfolio",
  },
};

export default function Portfolio() {
  return <PortfolioClient />;
}