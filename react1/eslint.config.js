import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      // .eslintrc.cjs의 rules(룰스)
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      // 점검 코드 추가
      "no-unused-vars":"off",
      // 사용하지 않는 변수 체크 안함
      "react/prop-types":"off",
      // 안전한 react 사용 점검 안함
    },
  },
])
