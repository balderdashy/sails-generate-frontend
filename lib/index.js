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
	}
};

		// './assets/linker/styles/importer.less': { template: 'importer.less' },
