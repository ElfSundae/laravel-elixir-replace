'use strict';

const replace = require('gulp-replace');

Elixir.config.replace = {
  skipBinary: false
};

Elixir.extend('replace', function(src, search, replacement, output, options) {
  if (!options || typeof options !== 'object') {
    options = Elixir.config.replace;
  }

  var paths = new Elixir.GulpPaths().src(src).output(output);

  new Elixir.Task('replace', function($) {
      this.recordStep('Replacing "' + search + '" to "' + replacement + '"');

      return gulp.src(paths.src.path, { dot: true })
        .pipe(replace(search, replacement, options))
        .pipe($.if(!paths.output.isDir, $.rename(paths.output.name)))
        .pipe(this.saveAs(gulp));
    }, paths)
    .watch(paths.src.path).ignore(paths.output.path);
});
