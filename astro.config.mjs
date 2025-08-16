// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://teemollt.github.io/germanistik-konferenz-2026/',
  base: '/germanistik-konferenz-2026/',
});