import typescriptEsLint from '@typescript-eslint/eslint-plugin'
import parserTypeScript from '@typescript-eslint/parser'
import eslintPluginPrettierRecommended from 'eslint-config-prettier'

export default [
  {
    name: 'eslint-ts',
    files: ['src/**/*.ts'],
    languageOptions: {
      parser: parserTypeScript,
    },
    plugins: {
      '@typescript-eslint': typescriptEsLint,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    },
  },
  eslintPluginPrettierRecommended,
]
