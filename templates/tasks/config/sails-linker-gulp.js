/**
 * Autoinsert script tags (or other filebased tags) in an html file.
 *
 * ---------------------------------------------------------------
 *
 * Automatically inject <script> tags for javascript files and <link> tags
 * for css files.  Also automatically links an output file containing precompiled
 * templates using a <script> tag.
 *
 * For usage docs see:
 * 		https://github.com/Zolmeister/grunt-sails-linker
 *
 */
// todo - add css and templates sections to layout.ejs. add prod,dev, etc
module.exports = function(gulp, plugins, growl) {
	gulp.task('sails-linker-gulp:devJs', function() {
		// Read templates
		return gulp.src(['.tmp/public/**/*.html', 'views/**/*.html', 'views/**/*.ejs'])
				// Link the JavaScript
				.pipe(plugins.linker({
					scripts: [require('../pipeline').jsFilesToInject],
					startTag: '<!--SCRIPTS-->',
					endTag: '<!--SCRIPTS END-->',
					fileTmpl: '<script src="%s"></script>',
					appRoot: '.tmp/public'
				}))
				// Write modified files to www/
				.pipe(gulp.dest('views/'))
				.pipe(plugins.if(growl, plugins.notify({ message: 'sails-linker-gulp devJs task complete' })));
	});
	  
	gulp.task('sails-linker-gulp:devJsRelative', function() {
		// Read templates
		return gulp.src(['.tmp/public/**/*.html', 'views/**/*.html', 'views/**/*.ejs'])
				// Link the JavaScript
				.pipe(plugins.linker({
					scripts: [require('../pipeline').jsFilesToInject],
					startTag: '<!--SCRIPTS-->',
					endTag: '<!--SCRIPTS END-->',
					fileTmpl: '<script src="%s"></script>',
					appRoot: '.tmp/public',
					relative: true
				}))
				// Write modified files to www/
				.pipe(gulp.dest('views/'))
				.pipe(plugins.if(growl, plugins.notify({ message: 'sails-linker-gulp devJsRelative task complete' })));
	});
	
	gulp.task('sails-linker-gulp:prodJs', function() {
		// Read templates
		return gulp.src(['.tmp/public/**/*.html', 'views/**/*.html', 'views/**/*.ejs'])
				// Link the JavaScript
				.pipe(plugins.linker({
					scripts: ['.tmp/public/min/production.min.js'],
					startTag: '<!--SCRIPTS-->',
					endTag: '<!--SCRIPTS END-->',
					fileTmpl: '<script src="%s"></script>',
					appRoot: '.tmp/public'
				}))
				// Write modified files to www/
				.pipe(gulp.dest('views/'))
				.pipe(plugins.if(growl, plugins.notify({ message: 'sails-linker-gulp prodJs task complete' })));
	});
	
	gulp.task('sails-linker-gulp:prodJsRelative', function() {
		// Read templates
		return gulp.src(['.tmp/public/**/*.html', 'views/**/*.html', 'views/**/*.ejs'])
				// Link the JavaScript
				.pipe(plugins.linker({
					scripts: ['.tmp/public/min/production.min.js'],
					startTag: '<!--SCRIPTS-->',
					endTag: '<!--SCRIPTS END-->',
					fileTmpl: '<script src="%s"></script>',
					appRoot: '.tmp/public',
					relative: true
				}))
				// Write modified files to www/
				.pipe(gulp.dest('views/'))
				.pipe(plugins.if(growl, plugins.notify({ message: 'sails-linker-gulp prodJsRelative task complete' })));
	});
	
	gulp.task('sails-linker-gulp:devStyles', function() {
		// Read templates
		return gulp.src(['.tmp/public/**/*.html', 'views/**/*.html', 'views/**/*.ejs'])
				.pipe(plugins.linker({
					scripts: [require('../pipeline').cssFilesToInject],
					startTag: '<!--STYLES-->',
					endTag: '<!--STYLES END-->',
					fileTmpl: '<link rel="stylesheet" href="%s">',
					appRoot: '.tmp/public'
				}))
				// Write modified files to www/
				.pipe(gulp.dest('views/'))
				.pipe(plugins.if(growl, plugins.notify({ message: 'sails-linker-gulp devStyles task complete' })));
	});
  
  	gulp.task('sails-linker-gulp:devStylesRelative', function() {
		// Read templates
		return gulp.src(['.tmp/public/**/*.html', 'views/**/*.html', 'views/**/*.ejs'])
				.pipe(plugins.linker({
					scripts: [require('../pipeline').cssFilesToInject],
					startTag: '<!--STYLES-->',
					endTag: '<!--STYLES END-->',
					fileTmpl: '<link rel="stylesheet" href="%s">',
					appRoot: '.tmp/public',
					relative: true
				}))
				// Write modified files to www/
				.pipe(gulp.dest('views/'))
				.pipe(plugins.if(growl, plugins.notify({ message: 'sails-linker-gulp devStylesRelative task complete' })));
	});

	gulp.task('sails-linker-gulp:prodStyles', function() {
		// Read templates
		return gulp.src(['.tmp/public/index.html', 'views/**/*.html', 'views/**/*.ejs'])
				.pipe(plugins.linker({
					scripts: ['.tmp/public/min/production.min.css'],
					startTag: '<!--STYLES-->',
					endTag: '<!--STYLES END-->',
					fileTmpl: '<link rel="stylesheet" href="%s">',
					appRoot: '.tmp/public'
				}))
				// Write modified files to www/
				.pipe(gulp.dest('views/'))
				.pipe(plugins.if(growl, plugins.notify({ message: 'sails-linker-gulp prodStyles task complete' })));
	});
	
  	gulp.task('sails-linker-gulp:prodStylesRelative', function() {
		// Read templates
		return gulp.src(['.tmp/public/index.html', 'views/**/*.html', 'views/**/*.ejs'])
				.pipe(plugins.linker({
					scripts: ['.tmp/public/min/production.min.css'],
					startTag: '<!--STYLES-->',
					endTag: '<!--STYLES END-->',
					fileTmpl: '<link rel="stylesheet" href="%s">',
					appRoot: '.tmp/public',
					relative: true
				}))
				// Write modified files to www/
				.pipe(gulp.dest('views/'))
				.pipe(plugins.if(growl, plugins.notify({ message: 'sails-linker-gulp prodStylesRelative task complete' })));
	});
	
	gulp.task('sails-linker-gulp:devTpl', function() {
		// Read templates
		return gulp.src(['.tmp/public/index.html', 'views/**/*.html', 'views/**/*.ejs'])
				// Link the JST Templates
				.pipe(plugins.linker({
					scripts: ['.tmp/public/jst.js'],
					startTag: '<!--TEMPLATES-->',
					endTag: '<!--TEMPLATES END-->',
					fileTmpl: '<script type="text/javascript" src="%s"></script>',
					appRoot: '.tmp/public',
				}))
				// Write modified files to www/
				.pipe(gulp.dest('views/'))
				.pipe(plugins.if(growl, plugins.notify({ message: 'sails-linker-gulp devTpl task complete' })));
	});
};
