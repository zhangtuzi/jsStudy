var gulp=require('gulp');
var BrowserSync=require('browser-sync');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('style',function(){
  return gulp.src('css/*.css')
      .pipe(autoprefixer({
          browsers: ['last 2 versions'],
          cascade: false
      }))
      .pipe(gulp.dest('css'));
  BrowserSync.reload();
})
gulp.task('hxjs',function(){
  BrowserSync.reload();
})
gulp.task('html_ys',function(){
  BrowserSync.reload();
})
gulp.task('serve',function(){
  BrowserSync({
    server:{baseDir:'./'}
  });
  gulp.watch('css/*.css',['style']);
  gulp.watch('js/*.js',['hxjs']);
  gulp.watch('*.html',['html_ys']);

})
