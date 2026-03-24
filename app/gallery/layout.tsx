import type { Metadata } from "next";

import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Boat Detailing Gallery",
  description:
    "Browse before-and-after boat detailing work from Kelowna Boat Detailing, including interior cleaning, oxidation correction, and finish protection.",
  path: "/gallery",
});

export default function GalleryLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
