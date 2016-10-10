/**
 * sails-generate-frontend
 *
 * Usage:
 * `sails generate frontend`
 *
 * @type {Dictionary}
 */

module.exports = {

	templatesDirectory: require('path').resolve(__dirname,'../templates'),

  /**
   * The targets to generate.
   * @type {Dictionary}
   */
	targets: {

    //   █████╗ ███████╗███████╗███████╗████████╗███████╗    ██╗
    //  ██╔══██╗██╔════╝██╔════╝██╔════╝╚══██╔══╝██╔════╝   ██╔╝
    //  ███████║███████╗███████╗█████╗     ██║   ███████╗  ██╔╝
    //  ██╔══██║╚════██║╚════██║██╔══╝     ██║   ╚════██║ ██╔╝
    //  ██║  ██║███████║███████║███████╗   ██║   ███████║██╔╝
    //  ╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝   ╚═╝   ╚══════╝╚═╝
    //
    // Default assets folder and contents:
    './assets':                      { folder: {} },
    './assets/favicon.ico':          { copy: 'assets/favicon.ico' },
    './assets/robots.txt':           { template: 'assets/robots.txt' },

    './assets/images':               { folder: {} },
    './assets/images/.gitkeep':      { copy: '.gitkeep'},

    './assets/styles':               { folder: {} },
    './assets/styles/importer.less': { template: 'assets/styles/importer.less' },

    './assets/templates':            { folder: {} },
    './assets/templates/.gitkeep':   { copy: '.gitkeep'},

    './assets/js':                   { folder: {} },
    './assets/js/dependencies':      { folder: {} },

    // Call sails.io.js sub-generator to create the browser sdk at the conventional location
    // (in `assets/js/dependencies/sails.io.js`)
		'./':                            ['sails.io.js'],

		// Example for folks creating custom front-end generators:
    // > (i.e. how to inject other client-side dependencies)
    // ====================================================================================
    // './assets/js/dependencies/angular.min.js': { exec: function (scope, cb) {
    //    if (scope.frontend !== 'angular') return cb();
    //    var src = require('path').resolve(__dirname,'../templates/assets/js/dependencies/angular.min.js');
    //    require('fs-extra').copy(src, scope.rootPath, cb);
    // } },
    // ====================================================================================



    //  ████████╗ █████╗ ███████╗██╗  ██╗███████╗    ██╗
    //  ╚══██╔══╝██╔══██╗██╔════╝██║ ██╔╝██╔════╝   ██╔╝
    //     ██║   ███████║███████╗█████╔╝ ███████╗  ██╔╝
    //     ██║   ██╔══██║╚════██║██╔═██╗ ╚════██║ ██╔╝
    //     ██║   ██║  ██║███████║██║  ██╗███████║██╔╝
    //     ╚═╝   ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚══════╝╚═╝
    //
    // Default tasks/ folder and contents:

		// asset pipeline setup
		'./tasks/pipeline.js': { template: 'tasks/pipeline.js' },


		// grunt task configurations (`tasks/config`)
		'./tasks/config/clean.js':        { copy: 'tasks/config/clean.js' },
		'./tasks/config/coffee.js':       { copy: 'tasks/config/coffee.js' },
		'./tasks/config/concat.js':       { copy: 'tasks/config/concat.js' },
		'./tasks/config/copy.js':         { copy: 'tasks/config/copy.js' },
		'./tasks/config/cssmin.js':       { copy: 'tasks/config/cssmin.js' },
		'./tasks/config/jst.js':          { copy: 'tasks/config/jst.js' },
		'./tasks/config/less.js':         { copy: 'tasks/config/less.js' },
		'./tasks/config/sails-linker.js': { copy: 'tasks/config/sails-linker.js' },
		'./tasks/config/sync.js':         { copy: 'tasks/config/sync.js' },
		'./tasks/config/uglify.js':       { copy: 'tasks/config/uglify.js' },

		'./tasks/config/watch.js':        { template: 'tasks/config/watch.js.template' },


		// built-in grunt tasks which are automatically called by Sails (`tasks/register`)
		'./tasks/register/build.js':               { copy: 'tasks/register/build.js' },
		'./tasks/register/buildProd.js':           { copy: 'tasks/register/buildProd.js' },
		'./tasks/register/compileAssets.js':       { copy: 'tasks/register/compileAssets.js' },
    './tasks/register/linkAssets.js':          { copy: 'tasks/register/linkAssets.js' },
    './tasks/register/linkAssetsBuild.js':     { copy: 'tasks/register/linkAssetsBuild.js' },
    './tasks/register/linkAssetsBuildProd.js': { copy: 'tasks/register/linkAssetsBuildProd.js' },
    './tasks/register/prod.js':                { copy: 'tasks/register/prod.js' },
    './tasks/register/syncAssets.js':          { copy: 'tasks/register/syncAssets.js' },

		'./tasks/register/default.js':             { template: 'tasks/register/default.js.template' },
	}
};

