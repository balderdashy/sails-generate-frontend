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
		'./grunt/values': { folder: {} },
		'./grunt/values/injectedFiles.js': { template: 'grunt/values/injectedFiles.js' },

		// grunt task configs
		'./grunt/config/clean.js': { template: 'grunt/config/clean.js' },
		'./grunt/config/coffee.js': { template: 'grunt/config/coffee.js' },
		'./grunt/config/concat.js': { template: 'grunt/config/concat.js' },
		'./grunt/config/copy.js': { template: 'grunt/config/copy.js' },
		'./grunt/config/cssmin.js': { template: 'grunt/config/cssmin.js' },
		'./grunt/config/jst.js': { template: 'grunt/config/jst.js' },
		'./grunt/config/less.js': { template: 'grunt/config/less.js' },
		'./grunt/config/sails-linker.js': { template: 'grunt/config/sails-linker.js' },
		'./grunt/config/sync.js': { template: 'grunt/config/sync.js' },
		'./grunt/config/uglify.js': { template: 'grunt/config/uglify.js' },
		'./grunt/config/watch.js': { template: 'grunt/config/watch.js' },

		// grunt registered tasks
		'./grunt/register/build.js': { template: 'grunt/register/build.js' },
		'./grunt/register/buildProd.js': { template: 'grunt/register/buildProd.js' },
		'./grunt/register/compileAssets.js': { template: 'grunt/register/compileAssets.js' },
		'./grunt/register/default.js': { template: 'grunt/register/default.js' },
		'./grunt/register/linkAssets.js': { template: 'grunt/register/linkAssets.js' },
		'./grunt/register/linkAssetsBuild.js': {
			template: 'grunt/register/linkAssetsBuild.js'
		},
		'./grunt/register/linkAssetsBuildProd.js': {
			template: 'grunt/register/linkAssetsBuildProd.js'
		},
		'./grunt/register/prod.js': { template: 'grunt/register/prod.js' },
		'./grunt/register/syncAssets.js': { template: 'grunt/register/syncAssets.js' }
	}
};

		// './assets/linker/styles/importer.less': { template: 'importer.less' },
