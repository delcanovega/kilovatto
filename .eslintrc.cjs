module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
        'react',
        'react-hooks',
        'unused-imports',
        'prettier',
    ],
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'plugin:prettier/recommended',
    ],
    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        'prettier/prettier': 'error',
        'unused-imports/no-unused-imports': 'error',
        'react/react-in-jsx-scope': 'off',
    },
};