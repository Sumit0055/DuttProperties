import { siteConfig } from "./site";

export const defaultOgImage = "/images/villas.jpg";

/**
 * Builds a consistent Metadata object for every route.
 * Keeps canonical, Open Graph and Twitter cards in sync automatically.
 */
export function buildMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  image = defaultOgImage,
  noIndex = false,
}) {
  const url = `${siteConfig.url}${path === "/" ? "" : path}`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      url,
      siteName: siteConfig.name,
      title,
      description,
      locale: "en_IN",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    ...(noIndex ? { robots: { index: false, follow: false } } : {}),
  };
}
