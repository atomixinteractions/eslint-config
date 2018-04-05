module.exports = {
  parser: 'babel-eslint',
  extends: [
    'plugin:react/recommended',
    'airbnb',
    '@atomix/eslint-config',
  ],
  plugins: [
    'import',
    'react',
  ],
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  rules: {
    'strict': 'off',
    'no-unused-vars': ['warn', { varsIgnorePattern: 'React', ignoreRestSiblings: false }],
    'class-methods-use-this': ['warn', { exceptMethods: [
      'componentDidCatch',
      'componentDidMount',
      'componentDidUpdate',
      'componentWillMount',
      'componentWillReceiveProps',
      'componentWillUnmount',
      'componentWillUpdate',
      'render',
      'shouldComponentUpdate',
    ]}],

    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'always-multiline',
    }],

    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'ForOfStatement',
        message: 'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
      },
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],

    'no-await-in-loop': 'error',

    'import/no-extraneous-dependencies': 'off',

    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'react/prop-types': ['warn', {
      ignore: ['classes', 'theme', 'sheet', 'sheets'],
    }],
    'react/no-access-state-in-setstate': 'warn',
    'react/forbid-foreign-prop-types': 'warn',

    'jsx-a11y/interactive-supports-focus': 'off',
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
  },
}
