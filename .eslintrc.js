module.exports = {
  env: {
    browser: true,
    node: true,
    es2020: true,
    jest: true
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['react', 'prettier'],
  extends: [
    'eslint:recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jsx-a11y/recommended'
  ],
  rules: {
    'import/no-cycle': [0, { ignoreExternal: true }],
    'prettier/prettier': 'error',
    'no-confusing-arrow': 'off',
    'implicit-arrow-linebreak': 'off',
    'no-const-assign': 'warn',
    'function-paren-newline': 'off',
    'object-curly-newline': 'off',
    'no-dupe-args': 'warn',
    'no-dupe-else-if': 'warn',
    'no-dupe-keys': 'warn',
    'no-duplicate-imports': 'error',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-curly-spacing': [1, { when: 'never', allowMultiline: true }],
    'react-hooks/exhaustive-deps': 'off',
    'jsx-quotes': [2, 'prefer-single'],
    'import/extensions': 'off',
    'react-hooks/rules-of-hooks': 'off',
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'react/no-unescaped-entities': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'no-param-reassign': 'off',
    'no-use-before-define': 'off',
    'prefer-const': 'off',
    'import/order': 'off',
    'import/no-absolute-path': 'off',
    'global-require': 'off',
    'no-nested-ternary': 'off',
    'no-useless-concat': 'off',
    'no-underscore-dangle': 'off',
    'no-plusplus': 'off',
    camelcase: 'off',
    'func-names': 'off',
    'consistent-return': 'off',
    'array-callback-return': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'spaced-comment': 'off',
    'import/namespace': 'off',
    'no-return-assign': 'off',
    'no-shadow': 'off',
    'comma-dangle': 'off'
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
        moduleDirectory: ['src', 'node_modules']
      }
    }
  }
};
