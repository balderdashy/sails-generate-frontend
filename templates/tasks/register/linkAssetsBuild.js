module.exports = function (gulp, plugins) {
	gulp.task('linkAssetsBuild', function(cb) {
		plugins.sequence(
			'sails-linker-gulp:devJsRelative',
			'sails-linker-gulp:devStylesRelative',
			'sails-linker-gulp:devTpl',
			/*'sails-linker-gulp:devJsRelativeJade',
			'sails-linker-gulp:devStylesRelativeJade',
			'sails-linker-gulp:devTplJade' */
			cb
		);
	});
};
