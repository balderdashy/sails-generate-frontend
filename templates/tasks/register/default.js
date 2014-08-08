module.exports = function (gulp) {
	//grunt.registerTask('default', ['compileAssets', 'linkAssets',  'watch']);
	gulp.task('default', ['compileAssets', 'images', 'linkAssets', 'watch:api', 'watch:assets']);
};
