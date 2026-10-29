import ServicePage from "@/screens/ServicePage";
import JsonLd from "@/Components/Seo/JsonLd";
import { services, serviceFaqs } from "@/data/services";
import { faqSchema, servicesSchema, breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Real Estate Services in Ghaziabad & Delhi NCR",
  description:
    "Residential and commercial property advisory, GDA-approved plots, investment guidance, site visits and documentation support across Ghaziabad, Noida, Greater Noida and Delhi NCR.",
  path: "/service",
  keywords: [
    "real estate services Ghaziabad",
    "property advisory Noida",
    "GDA plot verification Ghaziabad",
    "home loan documentation property",
    "channel partner services Delhi NCR",
  ],
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/service" },
          ]),
          servicesSchema(services),
          faqSchema(serviceFaqs),
        ]}
      />
      <ServicePage />
    </>
  );
}
