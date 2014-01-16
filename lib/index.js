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
		'./assets/favicon.ico': { copy: 'favicon.ico' },
		'./assets/robots.txt': { template: 'robots.txt' },
		'./assets/images': { folder: {} },
		'./assets/linker': { folder: {} },
		'./assets/linker/js': { folder: {} },
		'./assets/linker/js/example.js': { template: 'example.js' },
		'./assets/linker/js/sails.io.js': { template: 'sails.io.js' },
		'./assets/linker/js/socket.io.js': { template: 'socket.io.js' },
		'./assets/linker/styles': { folder: {} },
		'./assets/linker/templates': { folder: {} },
	}
};

		// './assets/linker/styles/importer.less': { template: 'importer.less' },
