var gulp = require('gulp');
var coffee = require('gulp-coffee');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('coffee', function () {
  'use strict';
  return gulp.src('./src/strophe.muc.coffee')
    .pipe(coffee())
    .pipe(gulp.dest('./dist'));
});

gulp.task('uglify', function () {
  'use strict';
  return gulp.src('./dist/strophe.muc.js')
    .pipe(uglify())
    .pipe(rename('strophe.muc.min.js'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['coffee', 'uglify']);
