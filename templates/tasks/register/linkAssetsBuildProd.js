module.exports = function (gulp, plugins) {
	gulp.task('linkAssetsBuildProd', function(cb) {
		plugins.sequence(
<<<<<<< HEAD
            'sails-linker-gulp:prodAssetsRelative',
            'sails-linker-gulp:prodViewsRelative',
=======
			'sails-linker-gulp:prodAssetsRelative',
			'sails-linker-gulp:prodViewsRelative',
>>>>>>> origin/master
			cb
		);
	});
};
