module.exports = {
  parser: 'babel-eslint',
  extends: [
    '@atomix/eslint-config',
  ],
  plugins: [
    'flowtype',
  ],
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  rules: {
    'flowtype/boolean-style': ['error', 'boolean'],
    'flowtype/define-flow-type': 'warn',
    'flowtype/delimiter-dangle': ['error', 'always-multiline'],
    'flowtype/generic-spacing': ['error', 'never'],
    'flowtype/no-dupe-keys': 'error',
    'flowtype/no-primitive-constructor-types': 'error',
    'flowtype/no-unused-expressions': 'error',
    'flowtype/no-weak-types': ['warn', {
      any: true,
      Object: true,
      Function: true,
    }],
    'flowtype/object-type-delimiter': ['error', 'comma'],
    'flowtype/require-valid-file-annotation': ['error', 'always', {
      annotationStyle: 'line',
    }],
    'flowtype/require-variable-type': ['warn', {
      excludeVariableTypes: {
        'var': false,
        'let': false,
        'const': true,
      },
    }],
    'flowtype/semi': ['error', 'never'],
    'flowtype/space-after-type-colon': ['error', 'always', {
      allowLineBreak: true,
    }],
    'flowtype/space-before-generic-bracket': ['error', 'never'],
    'flowtype/space-before-type-colon': ['error', 'never'],
    'flowtype/type-id-match': ['warn', '^I?[A-Z0-9][A-Za-z0-9]+_?$'],
    'flowtype/union-intersection-spacing': ['error', 'always'],
    'flowtype/valid-syntax': 'error',
  }
}
