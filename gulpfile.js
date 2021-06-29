'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));

function buildStyles() {
  return gulp.src('scss/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css'));
};

exports.buildStyles = buildStyles;
exports.watch = function () {
  gulp.watch('scss/*.scss', ['sass']);
};

// var gulp = require('gulp');
// var sass = require('gulp-sass');
// gulp.task('sass', function () {
//     return gulp.src('scss/styles.scss')
//         .pipe(sass()) // Converts Sass to CSS with gulp-sass
//         .pipe(gulp.dest(''))
// });




// const gulp = require('gulp');
// const sass = require('gulp-sass');

// gulp.task('styles', () => {
//     return gulp.src('scss/styles.scss')
//         .pipe(sass().on('error', sass.logError))
//         .pipe(gulp.dest(''));
// });

// 'use strict';

// var gulp = require('gulp');
// var sass = require('gulp-sass')(require('sass'));

// function buildStyles() {
//   return gulp.src('./sass/**/*.scss')
//     .pipe(sass().on('error', sass.logError))
//     .pipe(gulp.dest('./css'));
// };

// exports.buildStyles = buildStyles;
// exports.watch = function () {
//   gulp.watch('./sass/**/*.scss', ['sass']);
// };
