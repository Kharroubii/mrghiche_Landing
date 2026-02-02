import type { Metadata } from "next";
import ServicesClient from "./services-client";

export const metadata: Metadata = {
  title: "Our Services — Institutional Investment Strategies",
  description: "Comprehensive institutional services including Private Equity, Real Estate, Liquid Markets, and Digital Asset infrastructure.",
  alternates: {
    canonical: "/services",
  },
};

export default function Services() {
  return <ServicesClient />;
}