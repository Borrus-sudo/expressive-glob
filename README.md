<!-- DO NOT REMOVE - contributor_list:data:start:["Borrus-sudo", "dependabot[bot]"]:end -->

# 💡expressive-glob

[![All Contributors](https://img.shields.io/github/contributors/Borrus-sudo/expressive-glob?color=orange)](#contributors-)
![License](https://img.shields.io/github/license/Borrus-sudo/expressive-glob?label=License)
![Last Commit](https://img.shields.io/github/last-commit/Borrus-sudo/expressive-glob?label=Last%20Commit)
![Stars](https://img.shields.io/github/stars/Borrus-sudo/expressive-glob)
![Forks](https://img.shields.io/github/forks/Borrus-sudo/expressive-glob)

## Philosophy

This package uses the `fluent builder pattern`. Its main goal is to make the somewhat cryptic vocabulary of glob patterns easy to understand!

## Usage

```js
const glob = new ExpressiveGlob();
const globString1 = glob.capture.anyChar
  .string(".jpg")
  .anyChar.upto(2)
  .from("ABCDE")
  .end.toGlob();
glob.flush();
const globString2 = glob.capture.anyChar
  .string(".png")
  .anyChar.from(2, 5)
  .invert.end.toGlob();
expect(globString1).toBe("*.jpg??[ABCDE]");
expect(globString2).toBe("*.png*[!2-5]");
```

## Installation

`yarn add expressive-glob` or `npm i expressive-glob`

## Inspiration

This project is inspired by [super-expressive](https://github.com/francisrstokes/super-expressive)!

## 🎉 Contributing

Contributions are welcome! Whether it is a small documentation change or a breaking feature, we welcome it!

_Please note: All contributions are taken under the MIT license_

<!-- prettier-ignore-start -->
<!-- DO NOT REMOVE - contributor_list:start -->
## 👥 Contributors


- **[@Borrus-sudo](https://github.com/Borrus-sudo)**

- **[@dependabot[bot]](https://github.com/apps/dependabot)**

<!-- DO NOT REMOVE - contributor_list:end -->
<!-- prettier-ignore-end -->
