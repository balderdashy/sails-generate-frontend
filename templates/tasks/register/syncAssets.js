// todo - modify fully for gulp
module.exports = function (gulp) {
	gulp.task('syncAssets', [
		'jst:dev',
		'less:dev',
		'sync:dev',
		'coffee:dev'
	]);
};
