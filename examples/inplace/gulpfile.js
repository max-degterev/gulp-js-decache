const gulp = require('gulp');
// REMOVE THIS
const gulpJsDecache = require('../../');
// USE THIS
// const decache = require('gulp-js-decache');

const decache = () => (
  gulp.src(['js/*.js'])
    .pipe(gulpJsDecache({ base: './public/', logMissing: true }))
    .pipe(gulp.dest('./public'))
);

exports.default = decache;
