/**
 * [sync](https://github.com/tomusdrw/grunt-sync)
 *
 * A grunt task to keep directories in sync. It is very similar to
 * `grunt-contrib-copy`, but instead of deleting the destination files
 * and recopying them every time, it syncs only the files which have
 * actually changed.
 *
 * ---------------------------------------------------------------
 * ### Default Behavior:
 *
 * Synchronize files from the `assets` folder to `.tmp/public`,
 * smashing anything that's already there.
 *
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
