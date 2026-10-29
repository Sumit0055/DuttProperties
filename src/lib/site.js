/**
 * Single source of truth for brand, contact and local-SEO data.
 * Every value can be overridden with an environment variable so the
 * client only has to change `.env.local` before publishing.
 */

const stripTrailingSlash = (value) => value.replace(/\/+$/, "");

export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || "Dutt Properties",
  shortName: "Dutt Properties",
  legalName: "Dutt Properties",
  tagline: "Luxury residential & commercial property consultants in Ghaziabad and Delhi NCR",
  description:
    "Dutt Properties is an independent real estate consultant and channel partner for luxury apartments, villas, GDA-approved plots and commercial spaces across Ghaziabad, Indirapuram, Raj Nagar Extension, Noida, Greater Noida and Delhi NCR.",

  url: stripTrailingSlash(
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.duttproperties.in"
  ),

  phone: process.env.NEXT_PUBLIC_PHONE || "+91 96437 62686",
  phoneHref: "tel:+919643762686",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || "919643762686",
  email: process.env.NEXT_PUBLIC_EMAIL || "info@duttproperties.in",

  address: {
    street: "Raj Nagar Extension",
    locality: "Ghaziabad",
    region: "Uttar Pradesh",
    postalCode: "201017",
    country: "IN",
  },

  geo: {
    latitude: 28.6692,
    longitude: 77.4538,
  },

  social: {
    instagram: "https://www.instagram.com/dutt_properties_gzb/?hl=en",
    facebook: "https://www.facebook.com/share/19kKwEwnZn/",
    youtube: "https://www.youtube.com/@Dutt-Properties",
  },

  openingHours: "Mo-Sa 09:30-19:30",
  priceRange: "₹₹₹",

  /**
   * Areas targeted for local search. Used by the LocalBusiness schema,
   * the sitemap description and the on-page "areas we serve" section.
   */
  areasServed: [
    "Ghaziabad",
    "Raj Nagar Extension",
    "Indirapuram",
    "Vaishali",
    "Vasundhara",
    "Govindpuram",
    "Madhuban Bapudham",
    "Duhai",
    "Noida",
    "Noida Extension",
    "Greater Noida",
    "Delhi NCR",
    "Meerut",
  ],
};

/** Desktop + mobile navigation. Reused by the navbar and the sitemap. */
export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Properties",
    href: "/projects",
    children: [
      { label: "Apex Sky Heights", href: "/apex-sky-height" },
      { label: "The Kingdom Homes / Studio & Commercial Spaces", href: "/the-kingdom-homes" },
      { label: "AR Domain Luxurious Apartments", href: "/ar-domain" },
      { label: "Saya Raj Nagar Extension", href: "/saya" },
      { label: "VVIP Madhuban Bapudham Ghaziabad", href: "/vvip" },
      { label: "Gulshan BapuDham Ghaziabad", href: "/gulshan" },
      { label: "GDA Approved Residential Plots in Ghaziabad", href: "/gda" },
    ],
  },
  { label: "Services", href: "/service" },
  { label: "Contact", href: "/contact" },
];

/** Builds a wa.me link with a pre-filled, contextual message. */
export function whatsappLink(message) {
  const text = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${siteConfig.whatsapp}${text}`;
}
