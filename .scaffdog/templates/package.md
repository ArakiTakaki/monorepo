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
      "@/*": ["src/*"]
    }
  }
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
  "name": "@workspaces/{{ inputs.packageName | kebab }}",
  "packageManager": "yarn@3.5.1",
  "main": "index.ts",
  "dependencies": {
    "eslint-plugin-react": "^7.32.2"
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
export const sum = (a: numebr, b: number) => a + b
```
