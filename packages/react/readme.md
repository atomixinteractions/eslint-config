# @atomix/eslint-config-react

[![npm](https://img.shields.io/npm/v/@atomix/eslint-config-react.svg)](https://npmjs.com/@atomix/eslint-config-react)

This package provides Atomix's base .eslintrc config for ECMAScript 2017.

## Usage

Our config bases on [Airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base) and [Atomix](https://github.com/atomixinteractions/eslint-config/tree/master/packages/javascript).

Installation:

```bash
npm install --save-dev eslint babel-eslint @atomix/eslint-config-react
```

Create `.eslintrc`:

```json
{
  "extends": "@atomix/eslint-config-react",
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 2017
  }
}
```

Add `test` script to your package.json `"test": "eslint src lib bin"`

If you don't want es2017 features:

```bash
npm install --save-dev eslint @atomix/eslint-config-react
```

```json
{
  "extends": "@atomix/eslint-config-react"
}
```
