import Gda from "@/ProjectPages/Gda/Gda";
import JsonLd from "@/Components/Seo/JsonLd";
import { getProject } from "@/data/projects";
import { breadcrumbSchema, projectSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

const project = getProject("gda");

export const metadata = buildMetadata({
  title: project.title,
  description: project.description,
  path: `/${project.slug}`,
  keywords: project.keywords,
  image: project.image,
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Properties", path: "/projects" },
            { name: project.shortTitle, path: `/${project.slug}` },
          ]),
          projectSchema(project),
        ]}
      />
      <Gda />
    </>
  );
}
