import type { Metadata } from "next";
import CareersClient from "./careers-client";

export const metadata: Metadata = {
  title: "Careers — Join Our Institutional Team",
  description: "Join an elite team of investment professionals. Explore career opportunities at Mrghiche Capital in New York, London, and Dubai.",
  alternates: {
    canonical: "/careers",
  },
};

export default function Careers() {
  return <CareersClient />;
}