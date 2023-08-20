## jtruthy: typescript-typed Boolean() function

## Install

Install via [npm package](https://www.npmjs.com/package/jtruthy):

```bash
yarn add jtruthy
```

## Usage

```typescript
import truthy from 'jtruthy'
// or
const truthy = require('jtruthy')

const arr = [1, 2, false && 3] as const
const a = arr.filter(truthy) // type: (1 | 2)[]
const b = arr.filter(Boolean) // type: (false | 1 | 2)[]
```

## Deprecated note

This package was originally made to make `Array.prototype.filter()`'s return type better.
Recently, I found that we can do it better by just including the following type def in any ".d.ts" file in your project.

```typescript
type Truthy<T> = T extends false | '' | 0 | 0n | null | undefined ? never : T

interface Array<T> {
  filter(predicate: BooleanConstructor, thisArg?: any): Truthy<T>[]
}

interface ReadonlyArray<T> {
  filter(predicate: BooleanConstructor, thisArg?: any): Truthy<T>[]
}
```

Referred from [ts-reset](https://github.com/total-typescript/ts-reset) does it better.
