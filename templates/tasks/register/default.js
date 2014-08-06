// todo - modify fully for gulp
module.exports = function (gulp) {
	//grunt.registerTask('default', ['compileAssets', <%- linker ? "'linkAssets', " : '' %> 'watch']);
	gulp.task('default', ['styles', 'copy', 'scripts', 'images', 'linker', 'watch']);
};
