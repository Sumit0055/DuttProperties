import ProjectPage from "@/screens/ProjectPage";
import JsonLd from "@/Components/Seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Projects & Properties in Ghaziabad, Noida & Greater Noida",
  description:
    "Browse residential and commercial projects handled by Dutt Properties in Raj Nagar Extension, Madhuban Bapudham, Duhai and Govindpuram, Ghaziabad — with Noida and Greater Noida options on request.",
  path: "/projects",
  keywords: [
    "projects in Ghaziabad",
    "new residential projects Raj Nagar Extension",
    "luxury apartments Ghaziabad",
    "GDA approved plots Ghaziabad",
    "commercial property Ghaziabad",
    "property in Noida Extension",
  ],
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Properties", path: "/projects" },
        ])}
      />
      <ProjectPage />
    </>
  );
}
