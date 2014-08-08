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
	var server = plugins.livereload();
	gulp.task('watch:api', function() {
		// Watch Style files
		return gulp.watch('api/**/*', ['compileAssets', 'images', 'linkAssets'])
				.on('change', function(file) {
					server.changed(file.path);
				});
	});
	
	gulp.task('watch:assets', function() {
		// Watch assets
		return gulp.watch(['assets/**/*', 'tasks/pipeline.js'], ['compileAssets', 'images', 'linkAssets'])
				.on('change', function(file) {
					server.changed(file.path);
				});
	});

};
