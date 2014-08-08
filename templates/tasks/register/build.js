module.exports = function (gulp) {
	gulp.task('build', [
		'compileAssets',
		'linkAssetsBuild',
		'clean:build',
		'copy:build'
	]);
};
