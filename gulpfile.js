var gulp = require('gulp');

var flatten = require('gulp-flatten');

gulp.task('scripts', function(){
	gulp.src('vendor/**/*.min.js')
		.pipe(flatten())
		.pipe(gulp.dest('public/js'));
});

gulp.task('styles', function(){
	gulp.src('vendor/**/*.min.css')
		.pipe(flatten())
		.pipe(gulp.dest('public/css'));
});

gulp.task('default', ['scripts', 'styles']);