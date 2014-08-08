/**
 * Clean files and folders.
 *
 * ---------------------------------------------------------------
 *
 * This grunt task is configured to clean out the contents in the .tmp/public of your
 * sails project.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-clean
 */
module.exports = function(gulp, plugins) {
	gulp.task('clean:dev', function() {
		return gulp.src('.tmp/public/**', {read: false})
				.pipe(plugins.rimraf({ force: true }))
				.pipe(plugins.notify({ message: 'Clean task complete' }));;
	});
	gulp.task('clean:build', function() {
		return gulp.src('www', {read: false})
				.pipe(plugins.rimraf({ force: true }))
				.pipe(plugins.notify({ message: 'Clean task complete' }));;
	});
};
