// todo - modify fully for gulp
module.exports = function (gulp) {
	gulp.task('linkAssetsBuild', [
		'sails-linker-gulp:devJsRelative',
		'sails-linker-gulp:devStylesRelative',
		'sails-linker-gulp:devTpl'/* ,
		'sails-linker-gulp:devJsRelativeJade',
		'sails-linker-gulp:devStylesRelativeJade',
		'sails-linker-gulp:devTplJade' */
	]);
};
