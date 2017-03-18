# babel-plugin-jscript

[![Greenkeeper badge](https://badges.greenkeeper.io/benjamn/babel-plugin-jscript.svg)](https://greenkeeper.io/)

Babel plugin to fix buggy JScript named function expressions

## Installation

```sh
$ npm install babel-plugin-jscript
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["jscript"]
}
```

### Via CLI

```sh
$ babel --plugins jscript script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["jscript"]
});
```
