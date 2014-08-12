/**
 * Compress CSS files.
 *
 * ---------------------------------------------------------------
 *
 * Minifies css files and places them into .tmp/public/min directory.
 *
 */
module.exports = function(gulp, plugins) {

	gulp.task('cssmin:dist', function() {
		return gulp.src('.tmp/public/concat/production.css')
				.pipe(plugins.rename({ suffix: '.min' }))
				.pipe(plugins.minifyCss())
				.pipe(gulp.dest('./.tmp/public/min'))
				.pipe(plugins.notify({ message: 'Minify CSS task complete' }));
		});
};
