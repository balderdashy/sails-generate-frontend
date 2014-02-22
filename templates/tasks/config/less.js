/**
 * [less]()
 *
 * Compiles LESS files into CSS.
 * By default, only the `assets/styles/importer.less` is compiled.
 *
 * This allows you to control the ordering yourself.
 * (i.e. put dependencies/mixins/variables/your_css_reset before other stylesheets)
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
