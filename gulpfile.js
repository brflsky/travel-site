 var gulp = require('gulp');
 var watch = require('gulp-watch')
 gulp.task('default', function () {
   console.log('Hooray, you created gulp task');
 });

 gulp.task('html', function () {
   console.log('Image something useful with HTML');
 });
 
 gulp.task('styles', function () {
   console.log('Image something useful with CSS');
 });

 gulp.task('watch', function () {

  watch('./app/index.html', function () {
    gulp.start('html');
  });

  watch('./app/assets/styles/**/*.css', function () {
    gulp.start('styles');
  });

 });