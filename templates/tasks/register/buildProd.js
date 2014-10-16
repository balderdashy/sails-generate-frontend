module.exports = function (gulp, plugins) {
	gulp.task('buildProd', function(cb) {
		plugins.sequence(
			'compileAssets',
			'concat:js',
<<<<<<< HEAD
            'concat:css',
            'uglify:dist',
=======
			'concat:css',
			'uglify:dist',
>>>>>>> origin/master
			'cssmin:dist',
			'linkAssetsBuildProd',
			'clean:build',
			'copy:build',
			cb
		);
	});
};
