This is a very simple library.

Its function is to get a list of all API interface names of a certain module.

English | [简体中文](./README.zh-CN.md)

## Install

```bash
npm install modules-words --save
```

## use

If you want to get the API word list of all modules of Node.js:

```js
import { getNodejsWords } from "modules-words";
console.log(getNodejsWords());
```

If you want to get the API word list on the Window object:

```js
import { getGlobalWords } from "modules-words";
console.log(getGlobalWords());
```

If you want to get the API word list of a certain module (it can be a Node.js built-in module or a third-party module):

```js
import { getWords } from "modules-words";
console.log(getWords("vue"));
```

If you want to get the API word list of multiple modules (either Node.js built-in modules or third-party modules):

```js
import { getWords } from "modules-words";
console.log(getWords("vue", "axios"));
```

## main effect

This package was originally used with ESLint, a plug-in that checks whether words are spelled incorrectly.

This plugin is [eslint-plugin-spellcheck](https://www.npmjs.com/package/eslint-plugin-spellcheck).

You can add the corresponding configuration in your .eslintrc.js.

```js
const { getWords, getGlobalWords } = require("modules-words");

module.exports = {
  // more...
  rules: {
    // more...
    "spellcheck/spell-checker": [
      "warn",
      {
        skipWords: [
          // more...
          ...getGlobalWords(),
          ...getWords("vue", "axios", "vuex", "vue-router"),
        ],
      },
    ],
  },
};
```

Or you can use it with other similar Linter plugins.

Of course, it can also be used where you want to use it.

## API

#### getWords

Parameters: string ｜...string

Get the API word list of one or more modules.

#### getGlobalWords

Get the API word list of all built-in modules of Node.js, or get all the API word list on the Window object. It will automatically detect the operating platform.
