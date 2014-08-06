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
	gulp.task('clean', function() {
		return gulp.src(['.tmp/public/styles', '.tmp/public/js', '.tmp/public/images'], {read: false})
				.pipe(plugins.rimraf())
				.pipe(plugins.notify({ message: 'Clean task complete' }));;
	});
};
