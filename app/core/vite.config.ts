import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import ssr from 'vite-plugin-ssr/plugin';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), ssr({ prerender: true }), tsconfigPaths()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/__tests__/setup.ts',
    coverage: {
      provider: 'istanbul',
    },
  },
});
