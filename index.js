'use strict';

const replace = require('gulp-replace');

Elixir.config.replace = {
  skipBinary: true
};

Elixir.extend('replace', function(src, search, replacement, output, options) {
  var paths = new Elixir.GulpPaths().src(src).output(output || src);

  new Elixir.Task('replace', function($) {
      this.recordStep('Replacing "' + search + '" to "' + replacement + '"');

      return gulp.src(paths.src.path, { dot: true })
        .pipe(replace(search, replacement, options || Elixir.config.replace))
        .pipe($.if(!paths.output.isDir, $.rename(paths.output.name)))
        .pipe(this.saveAs(gulp));
    }, paths)
    .watch(paths.src.path).ignore(paths.output.path);
});
