import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  build: {
    lib: {
      entry: resolve(process.cwd(), './src/index.ts'),
      name: 'reactBaseLayout',
      // TODO 型定義ファイルを探す
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      fileName: (format: any) => `reactBaseLayout.${format}.js`,
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
  // TODO 型定義ファイルを探す
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
} as any);
