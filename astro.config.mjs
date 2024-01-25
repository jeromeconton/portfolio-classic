// astro.config.mjs
import { defineConfig } from 'astro/config';
import node from "@astrojs/node";

export default defineConfig({
  output: 'server', // ou 'hybrid'
  adapter: node({
    mode: "standalone"
  }),
  server: {
    host: true
  },
  includes: ['src/**/*.astro', 'src/**/*.md'],
  routes: [
    { src: '/index', dest: '/src/pages/index.astro' },
    { src: '/about', dest: '/src/pages/about.astro' },
    { src: '/work', dest: '/src/pages/work.astro' },
  ],
});
