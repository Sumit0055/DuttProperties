import AboutPage from "@/screens/AboutPage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About Dutt Properties — Real Estate Consultant in Ghaziabad",
  description:
    "Dutt Properties is an independent real estate consultant and channel partner in Ghaziabad, helping families and investors across Indirapuram, Raj Nagar Extension, Noida and Greater Noida.",
  path: "/about",
  keywords: [
    "about Dutt Properties",
    "property consultant Ghaziabad",
    "real estate channel partner Ghaziabad",
    "property advisor Indirapuram",
    "real estate consultant Delhi NCR",
  ],
});

export default function Page() {
  return <AboutPage />;
}
