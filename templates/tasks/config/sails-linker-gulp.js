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
module.exports = function(gulp, plugins) {
	gulp.task('linker',['scripts', 'styles'], function() {
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
				// Link the Styles
				.pipe(plugins.linker({
					scripts: [require('../pipeline').cssFilesToInject],
					startTag: '<!--STYLES-->',
					endTag: '<!--STYLES END-->',
					fileTmpl: '<link rel="stylesheet" href="%s">',
					appRoot: '.tmp/public',
					relative: true
				}))
				// Link the JST Templates
				.pipe(plugins.linker({
					scripts: ['.tmp/public/jst.js'],
					startTag: '<!--TEMPLATES-->',
					endTag: '<!--TEMPLATES END-->',
					fileTmpl: '<script type="text/javascript" src="%s"></script>',
					appRoot: '.tmp/public',
					relative: true
				}))
				// Write modified files to www/
				.pipe(gulp.dest('views/'))
				.pipe(plugins.notify({ message: 'Linker task complete' }));
	  });
  };
