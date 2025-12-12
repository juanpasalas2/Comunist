module.exports = {
  root: true,
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: ['./tsconfig.json'],
  },
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint',
    'import',
    'jsx-a11y',
    'tailwindcss',
    'prettier',
  ],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:tailwindcss/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {
    // Integración con Prettier: Prettier maneja formato, ESLint reporta como error si no cumple
    'prettier/prettier': ['error', { endOfLine: 'lf' }],

    // Reglas TypeScript / limpieza de código
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'off',

    // React y hooks
    'react/react-in-jsx-scope': 'off', // React 17+ no requiere import React
    'react/jsx-uses-react': 'off',
    'react/jsx-uses-vars': 'error',
    'react/prop-types': 'off', // usamos TS para tipos en props
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // Imports
    'import/order': [
      'warn',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
        ],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
    'import/no-unresolved': 'error',

    // Accessibility (JSX a11y)
    'jsx-a11y/anchor-is-valid': 'off', // si usas next/link o react-router
    'jsx-a11y/no-static-element-interactions': 'warn',

    // Tailwind: si usas prettier-plugin-tailwindcss, esto es más una guía
    'tailwindcss/classnames-order': 'off',
    'tailwindcss/no-custom-classname': 'off',

    // Estilo general
    curly: ['error', 'multi-line'],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        // reglas adicionales para TSX/TS
      },
    },
    {
      files: ['**/*.test.ts', '**/*.test.tsx', '**/__tests__/**'],
      rules: {
        'no-console': 'off',
      },
    },
  ],
};
