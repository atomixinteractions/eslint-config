# @atomix/eslint-config

[![npm](https://img.shields.io/npm/v/@atomix/eslint-config.svg)](https://npmjs.com/@atomix/eslint-config)

This package provides Atomix's base .eslintrc config for ECMAScript 2017.

## Usage

Our config bases on [Airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base) and [Unicorn by Sindre Sorhus](https://github.com/sindresorhus/eslint-plugin-unicorn).

Installation:

```bash
npm install --save-dev eslint babel-eslint @atomix/eslint-config
```

Create `.eslintrc`:

```json
{
  "extends": "@atomix/eslint-config",
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 2017
  }
}
```

Add `test` script to your package.json `"test": "eslint src lib bin"`

If you don't want es2017 features:

```bash
npm install --save-dev eslint @atomix/eslint-config
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
const x = (a) => 1 ? 2 : 3
```

## object-property-newline: `off`
## object-curly-newline: `off`
## object-curly-spacing: `off`

https://eslint.org/docs/rules/object-property-newline
https://eslint.org/docs/rules/object-curly-newline
https://eslint.org/docs/rules/object-curly-spacing

Disabled because broken

## arrow-parens: `warn`, `always`

https://eslint.org/docs/rules/arrow-parens

As defined in [Airbnb JS CodeStyle](https://github.com/airbnb/javascript/tree/f9fcb37af15391f6f75ae3e8d5e09f5f2ae064b8#arrows--implicit-return) arrow parens should only for block body.

But when you add more params for lambda, you should add parens. Example:

```diff
-.map(value => rotate(value, 1))
+.map((value, index) => rotate(value, 1 - index))
```

It provides inconsistency.


```js
// Good
() => {};
(a) => {};
(a) => a;
(a) => {'\n'}
a.then((foo) => {});
a.then((foo) => { if (true) {} });
const foo = (bar, baz) => ({ bar: baz })
const bar = ({ bar }) => bar.baz
const baz = (example) => {
  return 1
}
```

```js
// Bad
() => {};
a => {};
a => a;
a => {'\n'}
a.then(foo => {});
a.then(foo => { if (true) {} });
const foo = (bar, baz) => ({ bar: baz })
const bar = ({ bar }) => bar.baz
const baz = example => {
  return 1
}
```

## id-match: `error`, `^([a-z]([A-Za-z0-9]+){2,})|([A-Z][A-Z_0-9]+$`

```js
{
  properties: false,
  onlyDeclarations: true,
}
```

https://eslint.org/docs/rules/id-match

All identifiers should be camelCased and more that 2 symbols length.
Constants can be SCREAMING_UNDERSCORED

```js
// Good

let value = 1
const functionDummy = (argument) => {}
const CONSTANT_NAME = 123
class ExampleName {}
```


```js
// Bad
const Value = 1
const function_dummy = (MySuper_Argument) => {}
const constant_NAME = 1
class example_CLASS_name {}
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
        result.status.to((status) => status + argument.value)
      }

      return result
        .map((value) => value.resolver((res) => res[result.name]))
    }
    catch (error) {
      return Target.chainCall(() => Target.wrapWith(argument, error))
    }
  }
  else if (argument) {
    const value = Target.wrap(argument)

    try {
      return value
        .resolver((res) => value.getProp(res))
        .map((value) => value.head())
    }
    catch (error) {
      const rawValue = value.chain(Target.useRawSource)

      return Target.chainCall(() => Target.wrapWith(rawValue, error))
    }
  }
  else {
    const defaultValue = Target.wrap(Target.null())

    return defaultValue
      .resolver((res) => null)
      .map((value) => Target.useRawSource(null).value())
      .chain((fut) => fut.status.to((status) => 0))
  }
}

// Bad
function Demo(argument) {
  if (argument && argument.chained) {
    try {
      const result = Target.actionCall(argument, -1)

      while (!result.active) {
        result.status.to((status) => status + argument.value)
      }

      return result
        .map((value) => value.resolver((res) => res[result.name]))
    } catch (error) {
      return Target.chainCall(() => Target.wrapWith(argument, error))
    }
  } else if (argument) {
    const value = Target.wrap(argument)

    try {
      return value
        .resolver((res) => value.getProp(res))
        .map((value) => value.head())
    } catch (error) {
      const rawValue = value.chain(Target.useRawSource)

      return Target.chainCall(() => Target.wrapWith(rawValue, error))
    }
  } else {
    const defaultValue = Target.wrap(Target.null())

    return defaultValue
      .resolver((res) => null)
      .map((value) => Target.useRawSource(null).value())
      .chain((fut) => fut.status.to((status) => 0))
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


## lines-between-class-members: `[error, always]`

```js
{ exceptAfterSingleLine: true }
```

https://eslint.org/docs/rules/lines-between-class-members

Add lines between class methods/properties.

Example:
```js
class Foo {
  id = 1
  name = 'Foo'

  constructor() {
    // code
  }

  toString() { /* single line */ }

  member() {
    // code
  }

}
```


## implicit-arrow-linebreak: `[error, beside]`

https://eslint.org/docs/rules/implicit-arrow-linebreak

Implicit return in arrow function should be on same line.

Correct:

```js
const foo = () => 1
const bar = () => (
  2
)
const baz = () => {
  const val = 3
  return 3
}
```

Incorrect:

```js
const foo = () =>
  1
const bar = () =>
  (
    2
  )
const baz = () =>
  () =>
    3
```


## padding-line-between-statements: `error`

```js
{ blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
{ blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
```

https://eslint.org/docs/rules/padding-line-between-statements

Add padding line after `let`, `const` definitions.

Correct:

```js
const foo = 1
const bar = 2

runFunc(foo, bar)
```

Incorrect:

```js
const foo = 1
const bar = 2
runFunc(foo, bar)
```


## no-await-in-loop: `off`

https://eslint.org/docs/rules/no-await-in-loop

In Node.js LTS await in loop is native and optimized.

> Enabled in react


## no-restricted-syntax: `off`

https://eslint.org/docs/rules/no-restricted-syntax

In node.js we want to use "await in for" without Futures.

https://github.com/airbnb/javascript#iterators--nope

> Enabled in react


## import/no-absolute-path: `error`

https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-absolute-path.md

That is a bad practice as it ties the code using it to your computer, and therefore makes it unusable in packages distributed on npm for instance


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


## import/no-default-export: `error`

https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-default-export.md

Why? [Answer here](https://blog.neufund.org/why-we-have-banned-default-exports-and-you-should-do-the-same-d51fdc2cf2ad)

Correct:

```js
export class Foo {}

export const value = 1

export function run() {}

export { Bar } from './bar'

export * from './example'

export * as Baz from './baz'
```

Incorrect:

```js
export default class {}

const foo = 12

export { foo as default }

export Bar from './bar'
```

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


## unicorn/import-index: `off`

https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/import-index.md

Disabled, because we like more descriptive paths.
