import IntroPage from "@/screens/IntroPage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About the Team Behind Dutt Properties",
  description:
    "The technology and property background behind Dutt Properties — responsive web experiences and on-ground real estate support in Ghaziabad and Delhi NCR.",
  path: "/intro",
  noIndex: true,
});

export default function Page() {
  return <IntroPage />;
}
