/**
 * `tasks/register/linkAssetsBuild.js`
 *
 * ---------------------------------------------------------------
 *
 * This Grunt tasklist is not designed to be used directly-- rather
 * it is a helper called by the `build` tasklist.
 *
 * For more information see:
 *   http://sailsjs.com/anatomy/tasks/register/link-assets-build-js
 *
 */
module.exports = function(grunt) {
  grunt.registerTask('linkAssetsBuild', [
    'sails-linker:devJsRelative',
    'sails-linker:devStylesRelative',
    'sails-linker:devTpl',
    'sails-linker:devJsRelativeJade',
    'sails-linker:devStylesRelativeJade',
    'sails-linker:devTplJade'
  ]);
};
