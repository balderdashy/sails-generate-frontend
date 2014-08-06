/**
 * Copy files and folders.
 *
 * ---------------------------------------------------------------
 *
 * # dev task config
 * Copies all directories and files, exept coffescript and less fiels, from the sails
 * assets folder into the .tmp/public directory.
 *
 * # build task config
 * Copies all directories nd files from the .tmp/public directory into a www directory.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-copy
 */
module.exports = function(gulp, plugins) {
	gulp.task('copy', function() {
		return gulp.src('./assets/**/**.!(coffee|less|css|js)')
				.pipe(gulp.dest('.tmp/public'))
				.pipe(plugins.notify({ message: 'Copy task complete' }));
	});
};
