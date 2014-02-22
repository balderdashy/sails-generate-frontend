/**
 * Concatenates files.
 * https://github.com/gruntjs/grunt-contrib-concat
 *
 * javascript and CSS files together.
 */
module.exports = function(grunt) {

	grunt.config.set('concat', {
		js: {
			src: pipeline.jsFilesToInject,
			dest: '.tmp/public/concat/production.js'
		},
		css: {
			src: pipeline.cssFilesToInject,
			dest: '.tmp/public/concat/production.css'
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
};
