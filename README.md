# laravel-elixir-replace2

A [gulp-replace][] wrapper for [Laravel Elixir][elixir] 6 or higher.

## Installation

```sh
npm install --save-dev laravel-elixir-replace2
```

## Usage

```js
const elixir = require('laravel-elixir');

require('laravel-elixir-replace2');

elixir(mix => {
    mix.replace('node_modules/foo/bar.css', '../images/', '../img/', 'build');
});
```

The above example will replace all `'../images/'` in file `node_modules/foo/bar.css` to `'../img/'` and then save the processed file to `build/bar.css`.

## API

> **replace(src, search, replacement[, output[, options]])**

**Note:** `src` and `output` are relative to the project's root directory.

- **src**
  `string|array` The source files or directories.
- **search**
  `string|RegExp` The string or regex pattern to search for.
- **replacement**
  `string|function` The replacement string or function.
- **output**
  `string` (Optional) The output file or directory. Default is the same as the `src`.
- **options**
  `object` (Optional) The options for [gulp-replace][]. You can access the global options with `elixir.config.replace`.
  Default options is:
  ```js
  { 
    skipBinary: true
  }
  ```

[elixir]: http://laraveldoc.com/docs/elixir
[gulp-replace]: https://www.npmjs.com/package/gulp-replace
