 var gulp = require('gulp');
 var postcss = require('gulp-postcss');
 var watch = require('gulp-watch');
 var autoprefixer = require('autoprefixer');
 var cssvars = require('postcss-simple-vars');
 var nested = require('postcss-nested');
 gulp.task('default', function () {
   console.log('Hooray, you created gulp task');
 });

 gulp.task('html', function () {
   console.log('Image something useful with HTML');
 });
 
 gulp.task('styles', function () {
   return gulp.src('./app/assets/styles/style.css')
    .pipe(postcss([cssvars, nested, autoprefixer, ]))
    .pipe(gulp.dest('./app/temp/styles'));
 });

 gulp.task('watch', function () {

  watch('./app/index.html', function () {
    gulp.start('html');
  });

  watch('./app/assets/styles/**/*.css', function () {
    gulp.start('styles');
  });

 });