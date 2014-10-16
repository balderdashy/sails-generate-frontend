module.exports = function (gulp, plugins) {
	gulp.task('prod', function(cb) {
		plugins.sequence(
			'compileAssets',
<<<<<<< HEAD
            'concat:js',
            'concat:css',
=======
			'concat:js',
			'concat:css',
>>>>>>> origin/master
			'uglify:dist',
			'cssmin:dist',
			'sails-linker-gulp:prodAssets',
			'sails-linker-gulp:prodViews',
			cb
		);
	});
};
