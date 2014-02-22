/**
 * Syncs files from the `assets` folder to `.tmp/public`.
 */
module.exports = function(grunt) {

	grunt.config.set('sync', {
		dev: {
			files: [{
				cwd: './assets',
				src: ['**/*.!(coffee)'],
				dest: '.tmp/public'
			}]
		}
	});

	grunt.loadNpmTasks('grunt-sync');
};
