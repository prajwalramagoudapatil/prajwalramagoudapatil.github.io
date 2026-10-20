
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { vitePrerenderPlugin } from 'vite-prerender-plugin'
import { fileURLToPath } from 'node:url'

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    vitePrerenderPlugin({
      renderTarget: '#root',
      prerenderScript: fileURLToPath(
        new URL('./src/prerender.jsx', import.meta.url)
      ),
    }),
  ],
})
