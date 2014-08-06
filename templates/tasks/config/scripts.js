// todo - add coffee or make coffee.js
module.exports = function(gulp, plugins) {
	gulp.task('scripts', function() {
		return gulp.src(['assets/js/**/*.js'])
				.pipe(plugins.jshint('.jshintrc'))
				.pipe(plugins.jshint.reporter('default'))
				.pipe(plugins.concat('main.js'))
				.pipe(plugins.rename({ suffix: '.min' }))
				.pipe(plugins.uglify(/* {mangle: true} */))
				.pipe(gulp.dest('.tmp/public/js'))
				.pipe(plugins.notify({ message: 'Scripts task complete' }));
	});
};
