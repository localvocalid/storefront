const prettierConfig = require('./.prettierrc.js')

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'next/core-web-vitals',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'simple-import-sort'],
  rules: {
    // Best practices
    'dot-notation': 'error',
    'no-else-return': 'error',
    'no-floating-decimal': 'error',
    'no-sequences': 'error',

    // Stylistic
    'no-useless-escape': 'off',
    'array-bracket-spacing': 'error',
    'computed-property-spacing': ['error', 'never'],
    curly: 'error',
    'no-lonely-if': 'error',
    'no-unneeded-ternary': 'error',
    'one-var-declaration-per-line': 'error',
    quotes: [
      'error',
      'single',
      {
        allowTemplateLiterals: false,
        avoidEscape: true,
      },
    ],

    // ES6
    'array-callback-return': 'off',
    'prefer-const': 'error',

    // Imports & Exports
    'import/prefer-default-export': 'off',
    'no-unused-expressions': 'off',
    'no-prototype-builtins': 'off',

    // React
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/href-no-hash': [0],
    'react/display-name': 0,
    'react/no-deprecated': 'error',
    'react/no-unsafe': [
      'error',
      {
        checkAliases: true,
      },
    ],
    'react/jsx-sort-props': [
      'error',
      {
        ignoreCase: true,
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 0,

    // Typescript
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/no-non-null-asserted-optional-chain': ['off'],
    '@typescript-eslint/no-unnecessary-type-constraint': ['off'],
    '@typescript-eslint/no-empty-function': ['off'],
    '@typescript-eslint/ban-ts-comment': ['off'],

    // Prettier
    'prettier/prettier': ['error', prettierConfig],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
