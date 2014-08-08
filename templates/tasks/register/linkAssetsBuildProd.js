// todo - modify fully for gulp
module.exports = function (gulp) {
	gulp.task('linkAssetsBuildProd', [
		'sails-linker-gulp:prodJsRelative',
		'sails-linker-gulp:prodStylesRelative',
		'sails-linker-gulp:devTpl'/* ,
		'sails-linker-gulp:prodJsRelativeJade',
		'sails-linker-gulp:prodStylesRelativeJade',
		'sails-linker-gulp:devTplJade' */
	]);
};
