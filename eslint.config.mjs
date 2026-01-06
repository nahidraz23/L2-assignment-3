import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  // Ignore build output
  {
    ignores: ['dist/**', 'node_modules/**'],
  },

  // JavaScript files (Node)
  {
    files: ['**/*.{js,cjs,mjs}'],
    languageOptions: {
      globals: globals.node,
    },
    extends: [js.configs.recommended],
  },

  // TypeScript files
  {
    files: ['**/*.{ts,cts,mts}'],
    languageOptions: {
      globals: globals.node,
    },
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
    ],
  },
])
