![@tsdotnet/integer: Integers you can trust. Check and assert whole numbers.](https://cdn.jsdelivr.net/gh/tsdotnet/integer@master/assets/banner.svg)

[![npm version](https://img.shields.io/npm/v/@tsdotnet/integer.svg?style=flat-square)](https://www.npmjs.com/package/@tsdotnet/integer)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/tsdotnet/integer/blob/master/LICENSE)

Convert numbers to integers and assert that values are whole, positive or within 32 bits.

## Install

```sh
npm install @tsdotnet/integer
```

## Usage

```ts
import integer from '@tsdotnet/integer';

integer(2.9); // 2
integer(-2.9); // -2
integer.is(2.5); // false
integer.assertPositive(count); // throws unless count is a whole number above zero
```

Also: `integer.is32Bit`, `integer.as32Bit`, `integer.assert` and `integer.assertZeroOrGreater`.

## Use it from

ESM (`import integer from '@tsdotnet/integer';`) or CommonJS (`const integer = require('@tsdotnet/integer').default;`).

<details><summary>In a browser, without a bundler</summary>

```html
<script src="https://cdn.jsdelivr.net/npm/@tsdotnet/exceptions@1/dist/umd/exceptions.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@tsdotnet/integer@1/dist/umd/integer.min.js"></script>
<script>
  const integer = tsdotnet.integer.default;
</script>
```

</details>

## Docs

[tsdotnet.github.io/integer](https://tsdotnet.github.io/integer/)
