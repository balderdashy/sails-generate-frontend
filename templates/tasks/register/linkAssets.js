module.exports = function (gulp, plugins) {
	gulp.task('linkAssets', function(cb) {
		plugins.sequence(
			'sails-linker-gulp:devJs',
			'sails-linker-gulp:devStyles',
			'sails-linker-gulp:devTpl',
			/*'sails-linker-gulp:devJsJade',
			'sails-linker-gulp:devStylesJade',
			'sails-linker-gulp:devTplJade' */
			cb
		);
	});
};
