/**
 * Compile CoffeeScript files to JavaScript.
 *
 * ---------------------------------------------------------------
 *
 * Compiles coffeeScript files from `assest/js` into Javascript and places them into
 * `.tmp/public/js` directory.
 *
 * For usage docs see:
 * 		https://github.com/gruntsjs/grunt-contrib-coffee
 */
module.exports = function(grunt) {

	grunt.config.set('coffee', {
		dev: {
			options: {
				bare: true,
				sourceMap: true,
				sourceRoot: './'
			},
			files: [{
				expand: true,
				cwd: 'assets/scripts/',
				src: ['**/*.coffee'],
				dest: '.tmp/public/scripts/',
				ext: '.js'
			}, {
				expand: true,
				cwd: 'assets/scripts/',
				src: ['**/*.coffee'],
				dest: '.tmp/public/scripts/',
				ext: '.js'
			}]
		}
	});

	grunt.loadNpmTasks('grunt-contrib-coffee');
};
