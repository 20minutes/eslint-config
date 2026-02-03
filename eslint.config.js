import globals from 'globals'
import importPlugin from 'eslint-plugin-import'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import prettierPlugin from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier/flat'

const importRecommendedRules = {
  'import/no-unresolved': 'error',
  'import/named': 'error',
  'import/namespace': 'error',
  'import/default': 'error',
  'import/export': 'error',
  'import/no-named-as-default': 'warn',
  'import/no-named-as-default-member': 'warn',
  'import/no-duplicates': 'warn',
}

export default [
  {
    files: ['**/*.{js,jsx,mjs,cjs}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    plugins: {
      import: importPlugin,
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      ...importRecommendedRules,
      ...reactPlugin.configs.flat.recommended.rules,
      ...reactHooksPlugin.configs.flat.recommended.rules,
      semi: [2, 'never'],
      'no-console': [
        1,
        {
          allow: ['warn', 'error'],
        },
      ],
      curly: [1, 'all'],
      'no-param-reassign': [
        1,
        {
          props: false,
        },
      ],
      'import/prefer-default-export': 0,
      'no-multiple-empty-lines': [1, { max: 1, maxEOF: 0, maxBOF: 0 }],
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: '*', next: 'return' },
        { blankLine: 'always', prev: 'import', next: '*' },
        { blankLine: 'never', prev: 'import', next: 'import' },
      ],
      'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
      'prettier/prettier': [
        'error',
        {
          bracketSpacing: true,
          printWidth: 100,
          semi: false,
          singleQuote: true,
          trailingComma: 'es5',
        },
      ],
      'sort-imports': ['warn', { ignoreDeclarationSort: true, ignoreMemberSort: false }],
    },
  },
  prettierConfig,
]
