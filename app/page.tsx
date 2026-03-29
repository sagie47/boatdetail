import HomeView from "@/components/HomeView";

import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  description:
    "Kelowna Boat Detailing delivers premium spring launch mobile boat detailing, oxidation rescue, and ceramic protection across Kelowna and the Okanagan.",
  path: "/",
});

export default function Home() {
  return <HomeView />;
}
