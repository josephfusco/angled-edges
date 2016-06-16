var gulp = require('gulp'),
    watch = require('gulp-watch'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function() {
    gulp.src('styles/**/*.scss')
        .pipe(sass())
        .pipe(autoprefixer('last 2 version', '> 1%', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(gulp.dest('styles/build'));
});

gulp.task('watch', function() {
    gulp.watch('styles/**/*.scss', ['styles']);
});

gulp.task('default', ['styles','watch']);
