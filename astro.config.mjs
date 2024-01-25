// astro.config.mjs
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
  server: {
    host: '0.0.0.0',
  },
  routes: [
    {
      src: '/',
      dest: '/src/pages/index.astro',
    },
    {
      src: '/about',
      dest: '/src/pages/about.astro',
    },
    {
      src: '/work',
      dest: '/src/pages/work.astro',
    },
    {
      src: '/404',
      dest: '/src/pages/404.astro',
    },
  ],
});
