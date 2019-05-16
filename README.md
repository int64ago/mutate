# mutate

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]  [![Downloads][downloads-image]][npm-url]

Modify object and return immutable object.


## Usage

```bash
npm i @hspkg/mutate -S
```

### API

```js
/**
 * Modify object and return immutable object
 * @param {object} params The source object
 * @param {any} value The value to be set
 * @param {string[]} keys The keys in chain
 * @returns {object}
 */
mutate(params, value, ...keys);
```

### Examples

```js
import mutate from '@hspkg/mutate';

const source = {
  key1: 123,
  key3: 'test3',
  key4: {
    key5: {
      key6: 'Hello',
      key7: 'World'
    }
  }
};

console.log(mutate(source, 'hack', 'key4', 'key5', 'key6'));
// {
//   "key1": 123,
//   "key3": "test3",
//   "key4": {
//     "key5": {
//       "key6": "hack",
//       "key7": "World"
//     }
//   }
// }

console.log(mutate(source, 'hack', 'key4', 'key5', 'key8'));
// {
//   "key1": 123,
//   "key3": "test3",
//   "key4": {
//     "key5": {
//       "key6": "Hello",
//       "key7": "World",
//       "key8": "hack"
//     }
//   }
// }
```


## Test

```bash
npm test
```

## License

[![License][license-image]][license-url]

[downloads-image]: https://img.shields.io/npm/dt/@hspkg/mutate.svg?style=flat-square

[npm-url]: https://npmjs.org/package/@hspkg/mutate
[npm-image]: https://img.shields.io/npm/v/@hspkg/mutate.svg?style=flat-square

[travis-url]: https://travis-ci.com/int64ago/mutate
[travis-image]: https://img.shields.io/travis/com/int64ago/mutate.svg?style=flat-square

[license-url]: https://github.com/int64ago/mutate/blob/master/LICENSE
[license-image]: https://img.shields.io/github/license/int64ago/mutate.svg?style=flat-square
