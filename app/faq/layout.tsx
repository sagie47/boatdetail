import type { Metadata } from "next";

import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Boat Detailing FAQ",
  description:
    "Find answers about mobile boat detailing, service areas, oxidation removal, ceramic protection, and booking with Kelowna Boat Detailing.",
  path: "/faq",
});

export default function FAQLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
