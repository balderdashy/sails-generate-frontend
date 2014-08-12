module.exports = function (gulp, plugins) {
	gulp.task('linkAssetsBuildProd', function(cb) {
		plugins.sequence(
			'sails-linker-gulp:prodJsRelative',
			'sails-linker-gulp:prodStylesRelative',
			'sails-linker-gulp:devTpl',
			/*'sails-linker-gulp:prodJsRelativeJade',
			'sails-linker-gulp:prodStylesRelativeJade',
			'sails-linker-gulp:devTplJade' */
			cb
		);
	});
};
