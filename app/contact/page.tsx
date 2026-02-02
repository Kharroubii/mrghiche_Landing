import type { Metadata } from "next";
import ContactClient from "./contact-client";

export const metadata: Metadata = {
  title: "Contact Us — Institutional Relations",
  description: "Connect with Mrghiche Capital's relationship managers to discuss your investment objectives and explore strategic partnerships.",
  alternates: {
    canonical: "/contact",
  },
};

export default function Contact() {
  return <ContactClient />;
}