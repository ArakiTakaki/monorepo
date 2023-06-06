import { defineConfig } from 'vite';
import { resolve } from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths()],
  build: {
    lib: {
      entry: resolve(__dirname, './src/index.ts'),
      name: 'utils',
      fileName: (format) => `utils.${format}.js`
    },
  },
  test: {
    globals: true,
    // environment: 'jsdom',
    // setupFiles: './src/__tests__/setup.ts',
    coverage: {
      provider: 'istanbul',
    },
  },
} as any);