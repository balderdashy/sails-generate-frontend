![image_squidhome@2x.png](http://i.imgur.com/RIvu9.png)
# sails-generate-frontend-gulp
-----------------------------------------------
[![NPM version][npm-version-image]][npm-url] [![NPM downloads][npm-downloads-image]][npm-url] [![Dependency Status][dependency-image]][dependency-url] [![MIT License][license-image]][license-url]

A `frontend` generator for use with the Sails command-line interface that works with gulp and sails lift. This generator creates client side assets and files with grunt configurations and tasks that manage the front end assets for a sails project. To see more infomation about how it works look [here](./docs/overview.md).


### Installation

Certain generators are installed by default in Sails, but they can be overridden.  Check the [Sails docs](http://sailsjs.org/#!documentation) for information on installing generator overrides / custom generators.

```sh
$ npm install -g sails-generate-backend-gulp
$ npm install -g sails-generate-gulpfile
$ npm install -g sails-generate-frontend-gulp
$ npm install -g sails-generate-new-gulp

```

## .sailsrc

.sailsrc needs to be added to the working dir with the following:

```sh
{
    "generators": {
        "modules": {
            "new": "sails-generate-new-gulp",
            "frontend": "sails-generate-frontend-gulp",
            "backend": "sails-generate-backend-gulp",
            "gulpfile": "sails-generate-gulpfile"
        }
    }
}
```

### Production Usage

** It is important to note that css files will automatically be minified and autoprefixed for last two versions of Safari 5, IE 10, opera 12.1, ios 6 and android 4. The js files will automatically be concatenated to main.min.js. When adding files to assets folder while system is live, please make sure to add files one at a time (for now) and wait for the task to finish before adding the next file or else not all of the tasks will run on the files.

##### On the command line

```sh
$ sails generate frontend
```

##### In a node script

```javascript
var path = require('path');
var sailsgen = require('sails-generate');
var scope = {
	rootPath: path.resolve(__dirname)
};
sailsgen(require('sails-generate-frontend-gulp'), scope, function (err) {
	if (err) throw err;

	// It worked.
});
```


### Development

To get started quickly and see this generator in action, run the `bin/index.js` script:

```sh
$ git clone YOUR_FORK_OF_THIS_REPO sails-generate-frontend-fork
$ cd sails-generate-frontend-fork
$ npm install
$ node ./bin
```

`bin/index.js` is a simple script, bundled only for convenience, that runs the generator with hard-coded scope variables.  Please feel free to modify that file however you like!  Also see `CONTRIBUTING.md` for more information on overriding/enhancing generators.



### Questions?

See `FAQ.md`.



### More Resources

- [Stackoverflow](http://stackoverflow.com/questions/tagged/sails.js)
- [#sailsjs on Freenode](http://webchat.freenode.net/) (IRC channel)
- [Twitter](https://twitter.com/sailsjs)
- [Professional/enterprise](https://github.com/balderdashy/sails-docs/blob/master/FAQ.md#are-there-professional-support-options)
- [Tutorials](https://github.com/balderdashy/sails-docs/blob/master/FAQ.md#where-do-i-get-help)
- <a href="http://sailsjs.org" target="_blank" title="Node.js framework for building realtime APIs."><img src="https://github-camo.global.ssl.fastly.net/9e49073459ed4e0e2687b80eaf515d87b0da4a6b/687474703a2f2f62616c64657264617368792e6769746875622e696f2f7361696c732f696d616765732f6c6f676f2e706e67" width=60 alt="Sails.js logo (small)"/></a>


### License

**[MIT](./LICENSE)**
&copy; 2014 [Karnith](http://github.com/Karnith)

[Sails](http://sailsjs.org) is free and open-source under the [MIT License](http://sails.mit-license.org/).

[license-image]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE

[npm-url]: https://npmjs.org/package/sails-generate-frontend-gulp
[npm-version-image]: http://img.shields.io/npm/v/sails-generate-frontend-gulp.svg?style=flat
[npm-downloads-image]: http://img.shields.io/npm/dm/sails-generate-frontend-gulp.svg?style=flat

[dependency-image]: https://gemnasium.com/Karnith/sails-generate-frontend-gulp.svg?style=flat
[dependency-url]: https://gemnasium.com/Karnith/sails-generate-frontend-gulp

[coverage-image]: http://img.shields.io/coveralls/Karnith/sails-generate-frontend-gulp/master.svg?style=flat
[coverage-url]: https://coveralls.io/r/Karnith/sails-generate-frontend-gulp?branch=master
