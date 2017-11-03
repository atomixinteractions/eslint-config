# eslint-config-atomix-base

[![npm](https://img.shields.io/npm/v/eslint-config-atomix-base.svg)](https://npmjs.com/eslint-config-atomix-base)

This package provides Atomix's base .eslintrc config for ECMAScript 2017.

## Usage

Our config bases on [Airbnb's eslint config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base) and [Unicorn by Sindre Sorhus](https://github.com/sindresorhus/eslint-plugin-unicorn).

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

# Rules

Config extends `airbnb-base` and `plugin:unicorn/recommended`.

## strict: off

https://eslint.org/docs/rules/strict

Disable strict mode. You can manually enable it if required.


## no-unused-vars: `warn`

```js
{ ignoreRestSiblings: false }
```

https://eslint.org/docs/rules/no-unused-vars

Unused variables/functions/classes should be removed or commented.


## semi: `error, never`

https://eslint.org/docs/rules/semi

We don't write semicolons at each line. Only when needed.


## no-confusing-arrow: `off`

https://eslint.org/docs/rules/no-confusing-arrow

Really? You can be confused with?

```js
const x = a => 1 ? 2 : 3
```


## no-magic-numbers: `warn`

```js
{
  ignore: [1, 0, -1],
  ignoreArrayIndexes: true,
  enforceConst: true,
  detectObjects: false,
}
```

https://eslint.org/docs/rules/no-magic-numbers

Magic numbers is not descriptive. Please name it.

Exclude: 1, 0, -1, array indexes, object of numbers.

```js
// Good

const TAX = 1.28
const Coeff = {
  A: 0.924,
  B: 0.759,
  C: 0.552,
  V: 0.308,
  Z: 0.116,
}
const val = myList[5]
const prev = myList[val.next - 1]
```


## comma-dangle: `error`

```js
{
  arrays: 'always-multiline',
  objects: 'always-multiline',
  imports: 'always-multiline',
  functions: 'ignore',
}
```

https://eslint.org/docs/rules/comma-dangle

Not all environments supports comma dangle in function call/definition.


## operator-linebreak: `error, after`

```js
{
  overrides: {
    '?': 'before',
    ':': 'before',
    '&&': 'before',
    '+': 'before',
    '||': 'before',
  },
}
```

https://eslint.org/docs/rules/operator-linebreak

We like write idented code and readable code in any line width.

```js
// Good
const foo = condition
  ? firstResult
  : second + result

const demo = Foo.first
  || Foo.second
  || 'default value'

// Bad
const foo = condition ?
  firstResult :
  second + result

const demo = Foo.first ||
  Foo.second ||
  'default value'
```


## brace-style: `error, stroustrup`

https://eslint.org/docs/rules/brace-style

Because, 1tbs is so dirty.

```js
// Good
function Demo(argument) {
  if (argument && argument.chained) {
    try {
      const result = Target.actionCall(argument, -1)

      while (!result.active) {
        result.status.to(status => status + argument.value)
      }

      return result
        .map(value => value.resolver(res => res[result.name]))
    }
    catch (error) {
      return Target.chainCall(() => Target.wrapWith(argument, error))
    }
  }
  else if (argument) {
    const value = Target.wrap(argument)

    try {
      return value
        .resolver(res => value.getProp(res))
        .map(value => value.head())
    }
    catch (error) {
      const rawValue = value.chain(Target.useRawSource)

      return Target.chainCall(() => Target.wrapWith(rawValue, error))
    }
  }
  else {
    const defaultValue = Target.wrap(Target.null())

    return defaultValue
      .resolver(res => null)
      .map(value => Target.useRawSource(null).value())
      .chain(fut => fut.status.to(status => 0))
  }
}

// Bad
function Demo(argument) {
  if (argument && argument.chained) {
    try {
      const result = Target.actionCall(argument, -1)

      while (!result.active) {
        result.status.to(status => status + argument.value)
      }

      return result
        .map(value => value.resolver(res => res[result.name]))
    } catch (error) {
      return Target.chainCall(() => Target.wrapWith(argument, error))
    }
  } else if (argument) {
    const value = Target.wrap(argument)

    try {
      return value
        .resolver(res => value.getProp(res))
        .map(value => value.head())
    } catch (error) {
      const rawValue = value.chain(Target.useRawSource)

      return Target.chainCall(() => Target.wrapWith(rawValue, error))
    }
  } else {
    const defaultValue = Target.wrap(Target.null())

    return defaultValue
      .resolver(res => null)
      .map(value => Target.useRawSource(null).value())
      .chain(fut => fut.status.to(status => 0))
  }
}
```


## quote-props: `error, as-needed`

https://eslint.org/docs/rules/quote-props

Use quotes only if needed.

```js
// Good
const foo = {
  demo: 1,
  'foo-bar': 2,
  bar: {
    lock: 4
  },
  baz: 3,
}

// Bad
const baz = {
  'demo': 1,
  'foo-bar': 2,
  'bar': {
    'lock': 4
  },
  'baz': 3,
}
```


## no-plusplus: `off`

https://eslint.org/docs/rules/no-plusplus

We use it, because it good shorthand for some cases.


## import/no-unresolved: `off`

https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md

Because some projects use aliases or module resolvers.

But you can [configure module resolver](https://github.com/benmosher/eslint-plugin-import#resolvers) for eslint and enable it rule in your config.


## import/extensions: `error, never`

```
always for: json, json5, less, css, scss, sass, styl, jpeg, jpg, png, svg, bmp, gif
```

https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md

Node, webpack, rollup not require `.js` in file path by default.


## import/order: `warn`

```js
{
  groups: [
    ['builtin', 'external'],
    ['internal', 'parent'],
    ['sibling', 'index'],
  ],
  'newlines-between': 'ignore',
}
```

https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md

Prefer order of your imports. To correct resolving `internal` and `external` modules [configure module resolver](https://github.com/benmosher/eslint-plugin-import#resolvers).


## import/newline-after-import: `warn`

```js
{ count: 2 }
```

https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md

We separate our imports with main code with 2 empty lines.


## import/prefer-default-export: `off`

https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md

Use named exports to resolve naming problem.

With default export you can implicitly rename import binding. And your import not found in search by project.

```js
// foo.js
export default class Foo {}

// bar.js
import SomeAnyName from './foo'
```

With named import you explicitly rename import binding.

```js
// foo.js
export class Foo {}

// bar.js
import { Foo as SomeAnyName } from './foo'
```


## import/no-named-as-default: `off`

https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default.md

Rule is not resolving `param-case` naming of the files.

```js
import FooBar from './foo-bar' // Correct import. But not solved by rule
```


## unicorn/catch-error-name: `error`

```js
{ name: 'error' }
```

https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/catch-error-name.md

Variable names like `e`, `err`, `er` is so short. Name should be comprehensive like `error`.


## unicorn/no-fn-reference-in-iterator: `off`

https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-fn-reference-in-iterator.md

Disabled, because we like functional programming and we check all changelogs before update dependencies.
