const gulp = require('gulp')
const jade = require('gulp-jade')

gulp.task('build', () => {
  gulp.src('templates/index.jade')
  .pipe(jade({
    pretty: true,
    locals: { LOCALE: "fr_BE", LANGUAGE: "fr" }
  }))
  .pipe(gulp.dest('dist'))
})


gulp.task('watch', ['build'], () => {
  gulp.watch('templates/**/*.jade', ['build'])
})
