/**
 * [less](https://github.com/gruntjs/grunt-contrib-less)
 *
 * Compiles LESS files into CSS.
 *
 * ---------------------------------------------------------------
 *
 * ### Default Behavior:
 *
 * Only the `assets/styles/importer.less` is compiled.
 * This allows you to control the ordering yourself, i.e. import your
 * dependencies, mixins, variables, resets, etc. before other stylesheets)
 */

module.exports = function(grunt) {

	grunt.config.set('less', {
		dev: {
			files: [{
				expand: true,
				cwd: 'assets/styles/',
				src: ['importer.less'],
				dest: '.tmp/public/styles/',
				ext: '.css'
			}]
		}
	});

	grunt.loadNpmTasks('grunt-contrib-less');
};
