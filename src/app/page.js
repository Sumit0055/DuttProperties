import HomePage from "@/screens/HomePage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Luxury Property Consultant in Ghaziabad, Noida & Delhi NCR",
  description:
    "Dutt Properties connects buyers and investors with luxury apartments, villas, GDA-approved plots and commercial spaces across Ghaziabad, Indirapuram, Raj Nagar Extension, Noida and Greater Noida.",
  path: "/",
  keywords: [
    "property consultant Ghaziabad",
    "luxury apartments Ghaziabad",
    "flats in Raj Nagar Extension",
    "GDA approved plots Ghaziabad",
    "property in Noida and Greater Noida",
    "real estate channel partner Delhi NCR",
  ],
});

export default function Page() {
  return <HomePage />;
}
