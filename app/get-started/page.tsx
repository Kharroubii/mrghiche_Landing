import type { Metadata } from "next";
import GetStartedClient from "./get-started-client";

export const metadata: Metadata = {
  title: "Initialize Relationship — Onboarding",
  description: "Begin the institutional onboarding process and initialize your relationship with Mrghiche Capital.",
  alternates: {
    canonical: "/get-started",
  },
};

export default function GetStarted() {
  return <GetStartedClient />;
}