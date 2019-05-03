module.exports = {
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  env: {
    es6: true,
  },
  parser: "babel-eslint",
  plugins: ["import", "unicorn"],
  extends: [
    "airbnb-base",
    "plugin:unicorn/recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    strict: "off",
    semi: ["error", "never"],
    "vars-on-top": "off",
    quotes: "off",
    "no-confusing-arrow": "off",
    "no-unused-vars": [
      "warn",
      {
        args: "all",
        argsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
        ignoreRestSiblings: false,
        caughtErrors: "all",
        varsIgnorePattern: "^_",
      },
    ],
    "arrow-parens": ["warn", "always"],
    "no-plusplus": "off",
    "lines-between-class-members": [
      "error",
      "always",
      { exceptAfterSingleLine: true },
    ],
    "no-magic-numbers": [
      "warn",
      {
        ignore: [1, 0, -1],
        ignoreArrayIndexes: true,
        enforceConst: true,
        detectObjects: false,
      },
    ],
    "no-sequences": "warn",
    "no-await-in-loop": "off",
    "no-restricted-syntax": "off",
    "no-use-before-define": [
      "error",
      {
        functions: false,
        classes: true,
        variables: false,
      },
    ],

    "import/no-absolute-path": "error",
    "import/no-unresolved": "off",
    "import/no-default-export": "error",
    "import/no-self-import": "error",
    "import/no-cycle": "error",
    "import/order": [
      "warn",
      {
        groups: [
          ["builtin", "external"],
          ["internal", "parent"],
          ["sibling", "index"],
        ],
        "newlines-between": "ignore",
      },
    ],
    "import/prefer-default-export": "off",
    "import/no-named-as-default": "off",
    "import/newline-after-import": ["error", { count: 1 }],

    "unicorn/catch-error-name": [
      "error",
      { name: "error", caughtErrorsIgnorePattern: "^_" },
    ],
    "unicorn/no-fn-reference-in-iterator": "off",
    "unicorn/import-index": "off",
  },
}
