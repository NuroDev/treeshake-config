<div align="center">
  <h1>
    <br/>
    <br/>
    🔧
    <br />
    treeshake-config
    <br />
    <br />
    <br />
    <br />
  </h1>
  <sup>
    <br />
    Automatic config generation CLI</em>
    <br />
    <br />
  
[![Package Version](https://img.shields.io/npm/v/treeshake-config?label=%20&style=for-the-badge)](https://www.npmjs.com/package/treeshake-config)
[![Package Monthly Downloads](https://img.shields.io/npm/dm/treeshake-config?color=blue&label=%20&style=for-the-badge)](https://www.npmjs.com/package/treeshake-config)
[![Docs](https://img.shields.io/badge/-Docs-blue.svg?style=for-the-badge)](https://github.com/nurodev/treeshake-config)

  </sup>
  <br />
  <br />
</div>

## ❓ How does it work

`treeshake-config` works by importing a "root" config file & all of its exports.
For each export it will generate a new `.config.js` file accordingly.

<details>
  <summary>Example</summary>
  <br>
  An example of how `treeshake-config` works:

```ts
// config.ts
export const tailwind = {
  media: "class",
};

export const prettier = {
  useTabs: true,
};
```

Will generate the following files:

```js
// tailwind.config.js
module.exports = {
  media: "class",
};

// prettier.config.js
module.exports = {
  useTabs: true,
};
```

</details>

## 🚀 Install

Install it locally in your project

```bash
npm i --save--dev treeshake-config

# Or with Yarn

yarn add -D treeshake-config
```

## 🦄 Usage

Add the cli to your `postinstall` script in your `package.json` file:

```json5:package.json
{
  "scripts": {
    "postinstall": "treeshake-config"
  }
}
```

Lastly, add `*.config.js` to your `.gitignore` file to ignore all generated config files:

```zsh
# .gitignore
*.config.js
```

### CLI Arguments

If you want to customize how the CLI will function you can either manually add flags when executing the cli, or you can add a `treeshakeConfig` export to your "root" config file.

For example:

```ts
export const treeshakeConfig = {
  /**
   * Path to the root config file
   * @default `config.js` or `config.js` file in the same directory as the `package.json` file
   */
  root: "path/to/root/config.ts",
};
```
