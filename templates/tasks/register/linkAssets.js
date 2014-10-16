module.exports = function (gulp, plugins) {
	gulp.task('linkAssets', function(cb) {
		plugins.sequence(
<<<<<<< HEAD
            'sails-linker-gulp:devAssets',
            'sails-linker-gulp:devViews',
=======
			'sails-linker-gulp:devAssets',
			'sails-linker-gulp:devViews',
>>>>>>> origin/master
			cb
		);
	});
};
