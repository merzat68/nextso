// app/studio/sanity.config.js
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
// Import your schemas
import { schemaTypes } from "@/schemas";

export default defineConfig({
  basePath: "/studio", // The route where Sanity Studio will be accessible
  name: "default",
  title: "sodigital-website",
  projectId: "i7vlnhqq",
  dataset: "production",
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
});
