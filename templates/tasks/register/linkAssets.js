// todo - modify fully for gulp
module.exports = function (gulp) {
	gulp.task('linkAssets', [
		'sails-linker-gulp:devJs',
		'sails-linker-gulp:devStyles',
		'sails-linker-gulp:devTpl'/* ,
		'sails-linker-gulp:devJsJade',
		'sails-linker-gulp:devStylesJade',
		'sails-linker-gulp:devTplJade' */
	]);
};
