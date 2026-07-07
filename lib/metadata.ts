import type { Metadata } from "next";
import { site, pageTitle } from "./site-config";

type MetadataOptions = {
  title?: string;
  description?: string;
  path?: string;
};

export function createMetadata({
  title,
  description = site.description,
  path = "",
}: MetadataOptions = {}): Metadata {
  const url = `${site.url}${path}`;
  const fullTitle = title ? pageTitle(title) : pageTitle();

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(site.url),
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: site.name,
      type: "website",
      locale: "en_US",
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: site.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
    alternates: {
      canonical: url,
    },
  };
}
