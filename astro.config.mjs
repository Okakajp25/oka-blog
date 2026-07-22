// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders, passthroughImageService } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  redirects: {
      '/about': {
          status: 301,
          destination: 'https://okakey.com',
      }
  },

  server: {
      allowedHosts: ["blog.okaka.jp"]
  },

  site: 'https://blog.okaka.jp',
  integrations: [mdx(), sitemap(), icon()],

  fonts: [
      {
          provider: fontProviders.local(),
          name: 'Atkinson',
          cssVariable: '--font-atkinson',
          fallbacks: ['sans-serif'],
          options: {
              variants: [
                  {
                      src: ['./src/assets/fonts/atkinson-regular.woff'],
                      weight: 400,
                      style: 'normal',
                      display: 'swap',
                  },
                  {
                      src: ['./src/assets/fonts/atkinson-bold.woff'],
                      weight: 700,
                      style: 'normal',
                      display: 'swap',
                  },
              ],
          },
      },
    ],

    image: {
        service: {
            entrypoint: 'astro/assets/services/cloudflare/',
        }
    },

    adapter: cloudflare({
        imageService: "cloudflare-binding",
    }),
});