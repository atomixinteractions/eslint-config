module.exports = {
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  plugins: [
    'import',
    'unicorn',
  ],
  extends: ['airbnb-base', 'plugin:unicorn/recommended'],
  rules: {
    'strict': 'off',
    'no-unused-vars': ['warn', { ignoreRestSiblings: false }],
    'semi': ['error', 'never'],
    'no-confusing-arrow': 'off',

    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      functions: 'ignore',
    }],

    'operator-linebreak': ['error', 'after', {
      overrides: {
        '?': 'before',
        ':': 'before',
        '&&': 'before',
        '+': 'before',
        '||': 'before',
      } },
    ],
    'brace-style': ['error', 'stroustrup'],
    'quote-props': ['error', 'as-needed'],
    "no-plusplus": "off",

    'import/no-unresolved': 'off',
    'import/extensions': ['error', 'never',
      [
        'json', 'json5',
        'styl', 'css', 'scss', 'sass', 'styl',
        'jpeg', 'jpg', 'png', 'svg', 'bmp', 'gif',
      ].reduce((obj, ext) => Object.assign(obj, { [ext]: 'always' }), {}),
    ],

    'import/order': ['warn', {
      groups: [
        ['builtin', 'external'],
        ['internal', 'parent'],
        ['sibling', 'index']
      ],
      'newlines-between': 'ignore',
    }],

    'import/newline-after-import': ['warn', { count: 2 }],
    'import/prefer-default-export': 'off',
    'import/no-named-as-default': 'off',

    'unicorn/catch-error-name': ['error', { name: 'error' }],
    'unicorn/no-fn-reference-in-iterator': 'off',
  },
}
