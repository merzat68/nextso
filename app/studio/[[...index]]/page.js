"use client";

import { NextStudio } from "next-sanity/studio";
import config from "@/app/studio/sanity.config";

export default function StudioPage() {
  return <NextStudio config={config} />;
}
