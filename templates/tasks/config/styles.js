// todo - add other css formats
module.exports = function(gulp, plugins, path) {
	gulp.task('styles', function() {
		return gulp.src(['./assets/styles/**/**.less', './assets/styles/**/**.css'])
				.pipe(plugins.less(/* {
					paths: [ path.join(__dirname, 'assets') ]
				} */))
				.pipe(plugins.autoprefixer('last 2 version', 'safari 5', 'ie 10', 'opera 12.1', 'ios 6', 'android 4'))
				.pipe(plugins.rename({ suffix: '.min' }))
				.pipe(plugins.minifyCss())
				.pipe(gulp.dest('./.tmp/public/styles'))
				.pipe(plugins.notify({ message: 'Styles task complete' }));
	});
};
