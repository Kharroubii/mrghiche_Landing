import type { Metadata } from "next";
import SignInClient from "./signin-client";

export const metadata: Metadata = {
  title: "Client Portal — Secure Access",
  description: "Secure institutional access for authorized partners and shareholders of Mrghiche Capital.",
  alternates: {
    canonical: "/signin",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function SignIn() {
  return <SignInClient />;
}