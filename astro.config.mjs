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

});
