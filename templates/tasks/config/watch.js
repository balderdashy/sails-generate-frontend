/**
 * Run predefined tasks whenever watched file patterns are added, changed or deleted.
 *
 * ---------------------------------------------------------------
 *
 * Watch for changes on
 * - files in the `assets` folder
 * - the `tasks/pipeline.js` file
 * and re-run the appropriate tasks.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-watch
 *
 */
module.exports = function(gulp, plugins) {
	gulp.task('watch', function() {
		// Watch Style files
		gulp.watch(['assets/styles/**/*.less', 'assets/styles/**/*.css'], ['styles', 'linker']);
		// Watch JS files
		gulp.watch('assets/js/**/*.js', ['scripts']);
		// Watch image files
		gulp.watch('assets/images/**/*', ['images']);
		// Create LiveReload server
		var server = plugins.livereload();
		// Watch any files in dist/, reload on change
		gulp.watch(['assets/**/**']).on('change', function(file) {
			server.changed(file.path);
		});

	});
};
