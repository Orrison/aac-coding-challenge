const {
  src,
  dest,
  series,
} = require('gulp');

const concat = require('gulp-concat');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify-es').default;

const JS_PATH = 'assets/js';

const concatJS = () => src([
  `${JS_PATH}/helpers.js`,
  `${JS_PATH}/generate-users.js`,
])
  .pipe(concat('all.js'))
  .pipe(dest(JS_PATH));

const minifyJS = () => src(`${JS_PATH}/all.js`)
  .pipe(uglify())
  .pipe(rename('all.min.js'))
  .pipe(dest(JS_PATH));

exports.minify = series(concatJS, minifyJS);
