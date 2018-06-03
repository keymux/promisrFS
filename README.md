# promisrFS

`promisrFS` promisifies the majority of the functions available in the core fs module.

This module just forwards your arguments to the particular function available on the `fs` module, so check out the [spec][fs] for more information.  Additionally, any optional arguments in the spec are optional here also.

## Compatibility

| Node Version | Build Status |
| ------------ | ------------ |
| v6.10.2      | TBD          |

## Install

```bash
npm install @keymux/promisrFS
```

```bash
yarn add @keymux/promisrFS
```

## Features

Virtually every asynchronous function has been duplicated here with a predictable name.

### Examples of predictable names:

| `fs` name   | `promisrFS` name  |
| ----------- | ------------------ |
| `mkdir`     | `mkdirPromise`     |
| `readFile`  | `readFilePromise`  |
| `unlink`    | `unlinkPromise`    |
| `writeFile` | `writeFilePromise` |

### Exceptions to predictable names:

| `fs` name         | `promisrFS` name        |
| ----------------- | ------------------------ |
| `realpath`        | `realpathPromise`        |
| `realpath.native` | `realpath.nativePromise` |

### Common use cases

#### readFilePromise

Promises to read a file from disk and return the contents.

##### Example

```js
const { readFilePromise } = require("@keymux/promisrFS");

const path = require("path");

const filename = path.resolve("path/to/file");

const options = {
  encoding: "utf-8",
  flag: "r",
};

return readFilePromise(filename, options)
  .then(contents => {
    console.log(contents);
  }).catch(error => {
    console.error(error);
  });
```

#### writeFilePromise

Promises to write a file to disk

##### Example

```js
const { writeFilePromise } = require("@keymux/promisrFS");

const path = require("path");

const filename = path.resolve("path/to/file");

const contents = "Some text to write";

const options = {
  encoding: "utf-8",
  flag: "r",
};

return writeFilePromise(filename, contents, options)
  .then(() => {
    console.log("Wrote the file successfully to disk");
  }).catch(error => {
    console.error(error);
  });
```

### Where it gets fun

```js
// This example is meant to read a file, perform some transformation
// and write the result

const { readFilePromise, writeFilePromise } = require("@keymux/promisrFS");

const minimist = require("minimist");
const path = require("path");

const inputFile = "input-file";
const outputFile = "output-file";

const argv = minimist(process.argv.slice(2));

[inputFile, outputFile].forEach(ea => {
  if (argv[ea] === undefined) {
    console.error(`--${ea} was missing`);

    const base = path.basename(process.argv[1]);

    console.error("Usage\n" +
      `  ${base} --input-file=path/to/input --output-file=path/to/output`);

    process.exit(-1);
  }
});

// Replaces all instances of A or a with a question mark
const transformation = contents => contents.toString().replace(/[Aa]/g, "?");

// Promise chaining fun
return readFilePromise(argv[inputFile])
  .then(contents => transformation(contents))
  .then(result => writeFilePromise(argv[outputFile], result));
```

[fs]: https://nodejs.org/api/fs.html "fs documentation"
