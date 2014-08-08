/**
 * Compile CoffeeScript files to JavaScript.
 *
 * ---------------------------------------------------------------
 *
 * Compiles coffeeScript files from `assest/js` into Javascript and places them into
 * `.tmp/public/js` directory.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-coffee
 */
module.exports = function(gulp, plugins) {
	gulp.task('coffee:dev', function() {
		gulp.src('assest/js/**/**.coffee')
		.pipe(plugins.coffee({bare: true}).on('error', plugins.util.log))
		.pipe(gulp.dest('.tmp/public/js/'))
	});
};
