# gulp-js-decache [![Build Status](https://travis-ci.org/suprMax/gulp-js-decache.svg?branch=master)](https://travis-ci.org/suprMax/gulp-js-decache)

> Finds all local image urls in your JS files and adds cachebusting parameters to them.


## Install

```
$ npm install --save-dev gulp-js-decache
```


## Usage

```js
var gulp = require('gulp');
var decache = require('gulp-js-decache');

gulp.task('decache', function() {
  return gulp.src(['js/*.js'])
    .pipe(decache({ base : './public/', md5: true }))
    .pipe(gulp.dest('./public'));
});
```

It is best to run this on already processed and minified files with all of the optimizations applied.

## License

MIT © [Max Degterev](http://max.degterev.me)
