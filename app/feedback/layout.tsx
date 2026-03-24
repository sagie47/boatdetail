import type { Metadata } from "next";

import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Feedback",
  path: "/feedback",
  noIndex: true,
});

export default function FeedbackLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
