---
name: 'package'
description: 'パッケージ作成'
root: 'packages'
output: '**/*'
ignore: []
questions:
  packageName: 'パッケージ名'
---

<!-- tsconfig -->

# `{{ inputs.packageName | camel }}/tsconfig.json`

```json
{
  "extends": "@workspaces/tsconfig",
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@/*": ["/*"]
    },
    "noEmit": false,
    "emitDeclarationOnly": true,
    "declaration": true,
    "outDir": "./dist"
  },
  "include": ["src/**/*"],
  "exclude": ["src/__tests__/**/*", "src/**/*test*"]
}
```

<!-- README -->

# `{{ inputs.packageName | camel }}/README.md`

```md
#{{ inputs.packageName | camel }}
```

<!-- package.json -->

# `{{ inputs.packageName | camel }}/package.json`

```json
{
  "name": "@workspaces/{{ inputs.packageName | camel }}",
  "private": true,
  "type": "module",
  "main": "dist/{{ inputs.packageName | camel }}.umd.js",
  "module": "dist/{{ inputs.packageName | camel }}.es.js",
  "types": "dist/{{ inputs.packageName | camel }}.d.ts",
  "files": ["dist"],
  "scripts": {
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:coverage": "vitest --run --coverage",
    "prebuild": "rimraf dist",
    "build": "vite build && yarn tsc"
  },
  "exports": {
    ".": {
      "import": {
        "types": "./dist/index.d.ts",
        "default": "./dist/{{ inputs.packageName | camel }}.es.js"
      },
      "require": {
        "types": "./dist/index.d.ts",
        "default": "./dist/{{ inputs.packageName | camel }}.umd.js"
      }
    }
  },
  "packageManager": "yarn@3.5.1",
  "devDependencies": {
    "@vitest/coverage-istanbul": "^0.31.4",
    "@vitest/ui": "^0.31.4",
    "rimraf": "^5.0.1",
    "typescript": "^5.1.3",
    "vite": "^4.3.9",
    "vitest": "^0.31.4"
  }
}
```

<!-- entry -->

# `{{ inputs.packageName | camel }}/index.ts`

```ts
export * as {{ inputs.packageName | camel }} from './src/entry'
```

# `{{ inputs.packageName | camel }}/src/entry.ts`

```ts
export const sum = (a: number, b: number) => a + b;
```

# ``

```ts
import { resolve } from 'path';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths()],
  build: {
    lib: {
      entry: resolve(__dirname, './src/index.ts'),
      name: '{{ inputs.packageName | camel }}',
      // TODO 型定義ファイルを探す
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      fileName: (format: any) => `{{ inputs.packageName | camel }}.${format}.js`,
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
```
