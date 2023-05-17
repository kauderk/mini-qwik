import { defineConfig } from 'vite'
import { qwikVite } from '@builder.io/qwik/optimizer'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig(() => {
  return {
    build: {
      rollupOptions: {
        input: ['index.html'],
      },
    },
    plugins: [qwikVite(), tsconfigPaths()],
    preview: {
      headers: {
        'Cache-Control': 'public, max-age=600',
      },
    },
  }
})
