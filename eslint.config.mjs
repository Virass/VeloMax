import { dirname } from 'path';
import { fileURLToPath } from 'url';

import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    ...compat.config({
        extends: [
            'next/core-web-vitals',
            'next/typescript',
            'plugin:prettier/recommended',
        ],
        rules: {
            /* -------- General Best Practices -------- */
            eqeqeq: ['error', 'always'],
            'no-console': ['warn', { allow: ['warn', 'error'] }],
            'no-alert': 'warn',
            'no-duplicate-imports': 'error',
            'prefer-const': 'error',
            'no-var': 'error',
            'no-shadow': 'error',
            curly: ['error', 'all'],
            'arrow-body-style': ['error', 'as-needed'],

            /* -------- TypeScript Rules -------- */
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/no-unused-vars': [
                'warn',
                { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
            ],
            '@typescript-eslint/explicit-function-return-type': 'off',
            '@typescript-eslint/no-non-null-assertion': 'error',
            '@typescript-eslint/consistent-type-imports': [
                'error',
                { prefer: 'type-imports', disallowTypeAnnotations: false },
            ],

            /* -------- React Rules -------- */
            'react/prop-types': 'off',
            'react/jsx-no-duplicate-props': 'error',
            'react/no-unescaped-entities': 'off',
            'react/jsx-curly-brace-presence': ['error', 'never'],
            'react/self-closing-comp': 'error',
            'react-hooks/rules-of-hooks': 'error',

            /* -------- Import Rules -------- */
            'import/order': [
                'error',
                {
                    groups: [
                        'builtin',
                        'external',
                        'internal',
                        ['parent', 'sibling', 'index'],
                    ],
                    pathGroups: [
                        {
                            pattern: 'react',
                            group: 'external',
                            position: 'before',
                        },
                    ],
                    pathGroupsExcludedImportTypes: ['react'],
                    'newlines-between': 'always',
                    alphabetize: { order: 'asc', caseInsensitive: true },
                },
            ],
            'import/no-unresolved': 'error',
            'import/no-duplicates': 'error',

            /* -------- Accessibility Rules -------- */
            'jsx-a11y/alt-text': 'warn',

            /* -------- Next.js Specific -------- */
            '@next/next/no-img-element': 'error',
            '@next/next/no-html-link-for-pages': 'error',
            '@next/next/no-sync-scripts': 'error',

            /* -------- Extra Formatting -------- */
            semi: ['error', 'always'],
        },
    }),
];

export default eslintConfig;
