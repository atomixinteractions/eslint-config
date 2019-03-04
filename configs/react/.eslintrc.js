module.exports = {
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react", "jest", "jsx-a11y"],
  extends: ["airbnb", "@atomix/eslint-config"],
  rules: {
    "react/jsx-filename-extension": ["warn", { extensions: [".js"] }],
    "react/jsx-one-expression-per-line": "off",
  },
}
