// todo - modify fully for gulp
module.exports = function (gulp) {
	gulp.task('prod', [
		'compileAssets',
		'concat',
		'uglify',
		'cssmin',
		'sails-linker-gulp:prodJs',
		'sails-linker-gulp:prodStyles',
		'sails-linker-gulp:devTpl'/* ,
		'sails-linker-gulp:prodJsJade',
		'sails-linker-gulp:prodStylesJade',
		'sails-linker-gulp:devTplJade' */
	]);
};
