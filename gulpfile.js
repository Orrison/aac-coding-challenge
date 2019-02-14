const {
  src,
  dest,
  series,
  parallel,
} = require('gulp');

const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');

const JS_PATH = 'assets/js';
