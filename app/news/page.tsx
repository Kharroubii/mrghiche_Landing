import type { Metadata } from "next";
import NewsClient from "./news-client";

export const metadata: Metadata = {
  title: "Firm Insights — Market Analysis & Commentary",
  description: "Stay informed with the latest market analysis, institutional research, and firm updates from Mrghiche Capital.",
  alternates: {
    canonical: "/news",
  },
};

export default function News() {
  return <NewsClient />;
}