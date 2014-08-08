/**
 * Minify files with UglifyJS.
 *
 * ---------------------------------------------------------------
 *
 * Minifies client-side javascript `assets`.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-uglify
 *
 */
module.exports = function(gulp, plugins) {

	gulp.task('uglify:dist', function() {
		return gulp.src('.tmp/public/concat/production.js')
				.pipe(plugins.rename({ suffix: '.min' }))
				.pipe(plugins.uglify(/* {mangle: true} */))
				.pipe(gulp.dest('.tmp/public/min'))
				.pipe(plugins.notify({ message: 'uglify dist task complete' }));
		});
};
