module.exports = {
  extends: ['@workspaces/eslint-config'],
  root: true,
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: {
    'no-console': 'error',
  },
};
