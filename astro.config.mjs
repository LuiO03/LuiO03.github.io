// @ts-check
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://luio03.github.io',
  base: '/my_portfolio',
  integrations: [icon()],
});