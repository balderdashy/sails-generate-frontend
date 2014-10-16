module.exports = function (gulp, plugins) {
	gulp.task('linkAssetsBuild', function(cb) {
		plugins.sequence(
<<<<<<< HEAD
            'sails-linker-gulp:devAssetsRelative',
            'sails-linker-gulp:devViewsRelative',
=======
			'sails-linker-gulp:devAssetsRelative',
			'sails-linker-gulp:devViewsRelative',
>>>>>>> origin/master
			cb
		);
	});
};
