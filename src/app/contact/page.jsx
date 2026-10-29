import ContactPage from "@/screens/ContactPage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact Dutt Properties — Property Enquiry in Ghaziabad",
  description:
    "Share your budget, property type and preferred location. Dutt Properties responds to enquiries for Ghaziabad, Indirapuram, Raj Nagar Extension, Noida, Greater Noida and Delhi NCR.",
  path: "/contact",
  keywords: [
    "contact property dealer Ghaziabad",
    "property enquiry Ghaziabad",
    "real estate agent contact Noida",
    "buy flat in Ghaziabad",
  ],
});

export default function Page() {
  return <ContactPage />;
}
