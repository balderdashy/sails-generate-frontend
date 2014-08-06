// todo - make more robust and possible move to copy.js
module.exports = function(gulp, plugins) {
	 gulp.task('images', function() {
		return gulp.src('assets/images/**/*')
				.pipe(plugins.cache(plugins.imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
				.pipe(gulp.dest('.tmp/public/images'))
				.pipe(plugins.notify({ message: 'Images task complete' }));
	});
};
