// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Served at the apex of vedang.is-a.dev (custom domain via /public/CNAME),
  // so no base path or subpath prefix is needed.
  site: 'https://vedang.is-a.dev',
});
