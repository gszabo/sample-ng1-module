'use strict';

const gulp = require('gulp');

gulp.task('copy-jade', function() {
  return gulp.src('src/**/*.jade')
    .pipe(gulp.dest('dist/'));
});
