# eslint-config-atomix-base

[![npm](https://img.shields.io/npm/v/eslint-config-atomix-base.svg)](https://npmjs.com/eslint-config-atomix-base)

This package provides Atomix's base .eslintrc config for ECMAScript 2017.

## Usage

Our config bases on [Airbnb's eslint config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base).

Installation:

```bash
npm install --save-dev eslint babel-eslint eslint-config-atomix-base
```

Create `.eslintrc`:

```json
{
  "extends": "atomix-base",
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 2017
  }
}
```

Add `test` script to your package.json `"test": "eslint src lib bin"`

If you don't want es2017 features:

```bash
npm install --save-dev eslint eslint-config-atomix-base
```

```json
{
  "extends": "atomix-base"
}
```
