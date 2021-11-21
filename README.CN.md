这是一个非常简单的库。

它的作用是获取某个模块的所有 API 接口名称列表。

## 安装

```bash
npm install modules-words --save
```

## 使用

如果你要获取 Node.js 所有模块的 API 单词列表：

```js
import { getNodejsWords } from "modules-words";
console.log(getNodejsWords());
```

如果你要获取 Window 对象上的 API 单词列表：

```js
import { getGlobalWords } from "modules-words";
console.log(getGlobalWords());
```

如果你要获取某个模块（可以是 Node.js 内置模块，也可以是第三方模块）的 API 单词列表：

```js
import { getWords } from "modules-words";
console.log(getWords("vue"));
```

如果你要获取多个模块（可以是 Node.js 内置模块，也可以是第三方模块）的 API 单词列表：

```js
import { getWords } from "modules-words";
console.log(getWords("vue", "axios"));
```

## 主要作用

这个包最早是为了配合 ESLint 一个检查单词拼写是否错误的插件来使用的。

这个插件是 [eslint-plugin-spellcheck](https://www.npmjs.com/package/eslint-plugin-spellcheck)。

你可以在你的 .eslintrc.js 中添加相应的配置。

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

或者你可以通过配合其它类似的 Linter 插件来使用。

当然也可以用在你想用的地方。

## API

getWords

参数：string ｜...string

获取一个或多个模块的 API 单词列表。

getGlobalWords

获取 Node.js 所有内置模块的 API 单词列表，或者获取 Window 对象上的所有 API 单词列表。它会自动检测运行平台。
