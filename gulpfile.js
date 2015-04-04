var gulp = require('gulp'); 

// Watch Files For Changes
gulp.task('watch', function() {
  gulp.watch(['*.html', 'css/*.css']);
});

// Default Task
gulp.task('default', ['watch']);