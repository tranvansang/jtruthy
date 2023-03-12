## jtruthy: typescript-typed Boolean() function

## Install

Install via [npm package](https://www.npmjs.com/package/jtruthy):

```bash
yarn add jtruthy
```

## Usage

```typescript
import truthy from 'jtruthy'

const arr = [1, 2, false && 3] as const
const a = arr.filter(truthy) // type: (1 | 2)[]
const b = arr.filter(Boolean) // type: (false | 1 | 2)[]
```
