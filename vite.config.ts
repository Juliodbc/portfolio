/// <reference types="vitest" />

import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
import { defineConfig } from 'vite'

const base = process.env.VITE_BASE_PATH ?? '/'

export default defineConfig({
  base,
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['portfolio-icon.svg'],
      manifest: {
        name: 'Julio Correa — Portfólio',
        short_name: 'Julio Correa',
        description: 'Portfólio profissional de Julio Correa.',
        lang: 'pt-BR',
        theme_color: '#0a0a0c',
        background_color: '#0a0a0c',
        display: 'standalone',
        start_url: base,
        scope: base,
        icons: [{ src: `${base}portfolio-icon.svg`, sizes: 'any', type: 'image/svg+xml', purpose: 'any maskable' }],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,woff2}'],
        navigateFallback: `${base}index.html`,
      },
    }),
  ],
  resolve: {
    alias: {
      '@': import.meta.dirname + '/src',
    },
  },
  test: {
    globals: true,
    environment: 'jsdom'
  }
})
