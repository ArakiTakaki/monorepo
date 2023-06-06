import { resolve } from 'path';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths()],
  build: {
    lib: {
      entry: resolve(__dirname, './src/index.ts'),
      name: 'utils',
      // TODO 型定義ファイルを探す
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      fileName: (format: any) => `utils.${format}.js`,
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
