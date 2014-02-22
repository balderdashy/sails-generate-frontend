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

		// default assets folder and contents
		'./assets': { folder: {} },
		'./assets/favicon.ico': { copy: 'assets/favicon.ico' },
		'./assets/robots.txt': { template: 'assets/robots.txt' },
		'./assets/images': { folder: {} },
		'./assets/styles': { folder: {} },
		'./assets/styles/importer.less': { template: 'assets/styles/importer.less' },
		'./assets/templates': { folder: {} },
		'./assets/js': { folder: {} },
		'./assets/js/connection.example.js': { template: 'assets/js/connection.example.js' },
		'./assets/js/sails.io.js': { template: 'assets/js/sails.io.js' },
		'./assets/js/socket.io.js': { template: 'assets/js/socket.io.js' },


		// default asset pipeline configuration
		'./tasks/pipeline.js': { template: 'tasks/pipeline.js' },

		// grunt task configs
		'./tasks/config/clean.js': { template: 'tasks/config/clean.js' },
		'./tasks/config/coffee.js': { template: 'tasks/config/coffee.js' },
		'./tasks/config/concat.js': { template: 'tasks/config/concat.js' },
		'./tasks/config/copy.js': { template: 'tasks/config/copy.js' },
		'./tasks/config/cssmin.js': { template: 'tasks/config/cssmin.js' },
		'./tasks/config/jst.js': { template: 'tasks/config/jst.js' },
		'./tasks/config/less.js': { template: 'tasks/config/less.js' },
		'./tasks/config/sails-linker.js': { template: 'tasks/config/sails-linker.js' },
		'./tasks/config/sync.js': { template: 'tasks/config/sync.js' },
		'./tasks/config/uglify.js': { template: 'tasks/config/uglify.js' },
		'./tasks/config/watch.js': { template: 'tasks/config/watch.js' },

		// grunt registered tasks
		'./tasks/register/build.js': { template: 'tasks/register/build.js' },
		'./tasks/register/buildProd.js': { template: 'tasks/register/buildProd.js' },
		'./tasks/register/compileAssets.js': { template: 'tasks/register/compileAssets.js' },
		'./tasks/register/default.js': { template: 'tasks/register/default.js' },
		'./tasks/register/linkAssets.js': { template: 'tasks/register/linkAssets.js' },
		'./tasks/register/linkAssetsBuild.js': { template: 'tasks/register/linkAssetsBuild.js' },
		'./tasks/register/linkAssetsBuildProd.js': { template: 'tasks/register/linkAssetsBuildProd.js' },
		'./tasks/register/prod.js': { template: 'tasks/register/prod.js' },
		'./tasks/register/syncAssets.js': { template: 'tasks/register/syncAssets.js' }
	}
};

