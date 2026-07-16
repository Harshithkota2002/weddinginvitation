"use client";

import { useSite } from "./SiteProvider";
import { Petals, Sparkles } from "./Effects";

export default function Ambient() {
  const { opened } = useSite();
  if (!opened) return null;
  return (
    <>
      <Petals count={20} />
      <Sparkles count={22} />
    </>
  );
}
