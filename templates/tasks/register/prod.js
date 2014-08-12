module.exports = function (gulp, plugins) {
	gulp.task('prod', function(cb) {
		plugins.sequence(
			'compileAssets',
			'concat',
			'uglify',
			'cssmin',
			'sails-linker-gulp:prodJs',
			'sails-linker-gulp:prodStyles',
			'sails-linker-gulp:devTpl',
			/*'sails-linker-gulp:prodJsJade',
			'sails-linker-gulp:prodStylesJade',
			'sails-linker-gulp:devTplJade' */
			cb
		);
	});
};
