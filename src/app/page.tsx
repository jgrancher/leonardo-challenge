import { Suspense } from "react";

import { AnimesGrid } from "@/components/AnimesGrid";

export default function HomePage() {
  return (
    // TODO: Improve this Suspense with a nice fallback using a Skeleton grid from Chakra UI.
    <Suspense>
      <AnimesGrid />
    </Suspense>
  );
}
