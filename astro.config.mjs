// astro.config.mjs
import { defineConfig } from 'astro/config';
import node from "@astrojs/node";

  let hostValue;

if (process.env.NODE_ENV === 'production') {
  // Utiliser l'adresse IP de connexion Wi-Fi pour la production
  hostValue = '0.0.0.0';
} else {
  // En mode développement, utiliser la valeur par défaut (true)
  hostValue = true;
}

export default defineConfig({
  output: 'server',
  adapter: node({
    mode: "standalone"
  }),
  server: {
    host: hostValue,
    port: 4321,
  }
});
