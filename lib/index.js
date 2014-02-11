/**
 * sails-generate-frontend
 *
 * Usage:
 * `sails generate frontend`
 *
 * @type {Object}
 */

module.exports = {

	templatesDirectory: require('path').resolve(__dirname,'../templates'),

	before: require('./before'),

	targets: {
		'./assets': { folder: {} },
		'./assets/favicon.ico': { copy: 'assets/favicon.ico' },
		'./assets/robots.txt': { template: 'assets/robots.txt' },
		'./assets/images': { folder: {} },
		'./assets/js': { folder: {} },
		'./assets/js/example.js': { template: 'assets/js/example.js' },
		'./assets/js/sails.io.js': { template: 'assets/js/sails.io.js' },
		'./assets/js/socket.io.js': { template: 'assets/js/socket.io.js' },
		'./assets/styles': { folder: {} },
		'./assets/templates': { folder: {} },


		// values grunt task configs use
		'./gruntTasks/values': { folder: {} },
		'./gruntTasks/values/injectedFiles.js': { template: 'gruntTasks/values/injectedFiles.js' },

		// grunt task configs
		'./gruntTasks/config': { folder: {} },
		'./gruntTasks/config/clean.js': { template: 'gruntTasks/config/clean.js' },
		'./gruntTasks/config/coffee.js': { template: 'gruntTasks/config/coffee.js' },
		'./gruntTasks/config/concat.js': { template: 'gruntTasks/config/concat.js' },
		'./gruntTasks/config/copy.js': { template: 'gruntTasks/config/copy.js' },
		'./gruntTasks/config/cssmin.js': { template: 'gruntTasks/config/cssmin.js' },
		'./gruntTasks/config/jst.js': { template: 'gruntTasks/config/jst.js' },
		'./gruntTasks/config/less.js': { template: 'gruntTasks/config/less.js' },
		'./gruntTasks/config/sails-linker.js': { template: 'gruntTasks/config/sails-linker.js' },
		'./gruntTasks/config/sync.js': { template: 'gruntTasks/config/sync.js' },
		'./gruntTasks/config/uglify.js': { template: 'gruntTasks/config/uglify.js' },
		'./gruntTasks/config/watch.js': { template: 'gruntTasks/config/watch.js' },

		// grunt registered tasks
		'./gruntTasks/register': { folder: {} },
		'./gruntTasks/register/build.js': { template: 'gruntTasks/register/build.js' },
		'./gruntTasks/register/buildProd.js': { template: 'gruntTasks/register/buildProd.js' },
		'./gruntTasks/register/compileAssets.js': { template: 'gruntTasks/register/compileAssets.js' },
		'./gruntTasks/register/default.js': { template: 'gruntTasks/register/default.js' },
		'./gruntTasks/register/linkAssets.js': { template: 'gruntTasks/register/linkAssets.js' },
		'./gruntTasks/register/linkAssetsBuild.js': {
			template: 'gruntTasks/register/linkAssetsBuild.js'
		},
		'./gruntTasks/register/linkAssetsBuildProd.js': {
			template: 'gruntTasks/register/linkAssetsBuildProd.js'
		},
		'./gruntTasks/register/prod.js': { template: 'gruntTasks/register/prod.js' },
		'./gruntTasks/register/syncAssets.js': { template: 'gruntTasks/register/syncAssets.js' }
	}
};

		// './assets/linker/styles/importer.less': { template: 'importer.less' },
