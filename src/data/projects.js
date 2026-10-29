/**
 * Project catalogue metadata.
 *
 * The page components keep their own richer copy for layout. This file only
 * carries the fields needed for SEO (title, description, keywords, image) and
 * for the sitemap, so both stay in sync from one place.
 */

export const projects = [
  {
    slug: "apex-sky-height",
    name: "Apex Sky Heights",
    title: "Apex Sky Heights, Raj Nagar Extension Ghaziabad",
    shortTitle: "Apex Sky Heights",
    location: "Raj Nagar Extension, Ghaziabad",
    type: "Residential Apartments",
    description:
      "Explore Apex Sky Heights apartments in Raj Nagar Extension, Ghaziabad. Get layout details, price on request and site visit assistance from Dutt Properties.",
    keywords: [
      "Apex Sky Heights Ghaziabad",
      "Apex Sky Heights Raj Nagar Extension",
      "luxury apartments Raj Nagar Extension",
      "3 BHK flats Ghaziabad",
    ],
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
    updated: "2026-01-12",
  },
  {
    slug: "ar-domain",
    name: "AR Domain",
    title: "AR Domain Apartments, Ghaziabad",
    shortTitle: "AR Domain",
    location: "Humtum Road, Village Morta, Ghaziabad",
    type: "Residential Apartments",
    description:
      "AR Domain offers 3 BHK and 4 BHK apartments in Morta, Ghaziabad with a swimming pool, kids play area and landscaped spaces. Enquire for current availability.",
    keywords: [
      "AR Domain Ghaziabad",
      "AR Domain Morta",
      "4 BHK apartments Ghaziabad",
      "new projects in Ghaziabad",
    ],
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80",
    updated: "2026-01-12",
  },
  {
    slug: "the-kingdom-homes",
    name: "The Kingdom Homes",
    title: "The Kingdom Homes, Raj Nagar Extension Ghaziabad",
    shortTitle: "The Kingdom Homes",
    location: "Raj Nagar Extension, Ghaziabad",
    type: "Studio & Commercial Spaces",
    description:
      "The Kingdom Homes in Raj Nagar Extension, Ghaziabad offers studio apartments and commercial spaces near KW6 Delhi Mall. Talk to Dutt Properties for details.",
    keywords: [
      "The Kingdom Homes Ghaziabad",
      "studio apartments Raj Nagar Extension",
      "commercial shops Raj Nagar Extension",
      "office space Ghaziabad",
    ],
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=80",
    updated: "2026-01-12",
  },
  {
    slug: "vvip",
    name: "VVIP Madhuban",
    title: "VVIP Madhuban Bapudham Apartments, Ghaziabad",
    shortTitle: "VVIP Madhuban",
    location: "Madhuban Bapudham, Ghaziabad",
    type: "Luxury Residential Apartments",
    description:
      "VVIP Madhuban Bapudham in Ghaziabad is a luxury apartment address with premium interiors and lifestyle spaces. Request the latest availability and pricing.",
    keywords: [
      "VVIP Madhuban Ghaziabad",
      "Madhuban Bapudham apartments",
      "luxury flats Ghaziabad",
      "premium apartments Delhi NCR",
    ],
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1600&q=80",
    updated: "2026-01-12",
  },
  {
    slug: "gulshan",
    name: "Gulshan",
    title: "Gulshan Apartments, Madhuban Bapudham Ghaziabad",
    shortTitle: "Gulshan",
    location: "Madhuban Bapudham, Ghaziabad",
    type: "Residential Apartments",
    description:
      "Gulshan in Madhuban Bapudham, Ghaziabad offers 3 BHK homes from 1,510 to 2,150 sq.ft. with study options. Get floor plan and site visit support.",
    keywords: [
      "Gulshan Ghaziabad",
      "Gulshan Madhuban Bapudham",
      "3 BHK Ghaziabad",
      "apartments near Ghaziabad",
    ],
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
    updated: "2026-01-12",
  },
  {
    slug: "saya",
    name: "Saya",
    title: "Saya Apartments, Duhai NH-58 Ghaziabad",
    shortTitle: "Saya",
    location: "Duhai, NH-58, Ghaziabad",
    type: "Premium Residential Apartments",
    description:
      "Saya at Duhai on NH-58, Ghaziabad offers 2, 3 and 4 BHK premium apartments with modern interiors and dedicated parking. Enquire with Dutt Properties.",
    keywords: [
      "Saya Ghaziabad",
      "Saya Duhai NH-58",
      "2 BHK 3 BHK 4 BHK Ghaziabad",
      "apartments near Delhi Meerut Expressway",
    ],
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80",
    updated: "2026-01-12",
  },
  {
    slug: "gda",
    name: "GDA Approved Plots",
    title: "GDA Approved Residential Plots & Flats in Ghaziabad",
    shortTitle: "GDA Approved Plots",
    location: "Govindpuram, Ghaziabad",
    type: "Residential Plots & Flats",
    description:
      "GDA approved residential plots and flats in Govindpuram, Ghaziabad. Verify approval documents, location and connectivity with an independent property consultant.",
    keywords: [
      "GDA approved plots Ghaziabad",
      "residential plots Govindpuram",
      "GDA flats Ghaziabad",
      "plot for sale Ghaziabad",
    ],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
    updated: "2026-01-12",
  },
];

export const getProject = (slug) => projects.find((project) => project.slug === slug);
