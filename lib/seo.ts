import type { Metadata } from "next";

import { absoluteUrl, siteConfig } from "@/lib/site";

type BuildMetadataInput = {
  title?: string;
  description?: string;
  path?: string;
  keywords?: string[];
  noIndex?: boolean;
};

export function buildMetadata({
  title,
  description = siteConfig.defaultDescription,
  path = "/",
  keywords = [],
  noIndex = false,
}: BuildMetadataInput = {}): Metadata {
  const resolvedTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} | ${siteConfig.defaultTitle}`;
  const url = absoluteUrl(path);
  const mergedKeywords = [...new Set([...siteConfig.keywords, ...keywords])];

  return {
    title: resolvedTitle,
    description,
    keywords: mergedKeywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: resolvedTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_CA",
      type: "website",
      images: [
        {
          url: absoluteUrl("/images/logo.png"),
          width: 800,
          height: 600,
          alt: `${siteConfig.name} logo`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description,
      images: [absoluteUrl("/images/logo.png")],
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
          googleBot: {
            index: false,
            follow: false,
          },
        }
      : undefined,
  };
}
