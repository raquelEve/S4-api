# exercise S4-api

_Project in Typescript: Experience endless laughter with our website! We fetch jokes from an API and showcase random humor with just a click._
<br>

## Installation

First, clone the repository:

```bash
$ git clone https://github.com/your_username/your_project.git
$ cd your_project
```

## Requirements

1. Install TypeScript in your project: TypeScript is a necessary tool for compiling TypeScript files into JavaScript

```bash
$ npm i typescript --save-dev
```

2. Initialize TypeScript in your project:

```bash
$ npx tsc --init
```

3. Run TypeScript compiler: from your project’s directory the TypeScript compiler (tsc)

```bash
$ npx tsc
```

4. Activate watch mode

```bash
$ npx tsc -w
```

5. Specify output directory dist folder in the file the tsconfig.json
   "compilerOptions": {
   "outDir": "./dist"
   }
   <br>

_start coding your TypeScript_

## test code in your ts file

const world = 'world';

export function hello(who: string = world): string {
return `Hello ${who}! `;
}

## The output in javascript should be:

"use strict";
Object.defineProperty(exports, "\_\_esModule", { value: true });
exports.hello = void 0;
const world = 'world';
function hello(who = world) {
return `Hello ${who}! `;
}
exports.hello = hello;
