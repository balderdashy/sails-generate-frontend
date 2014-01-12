# sails-generate-frontend

This is the default `frontend` generator for Sails.js.  It puts together the pieces of a generic web app, but by no means the "right" solution vs. any other frontend generator.  It's just set up this way for consistency, convenience, and backwards compatibility.


## Usage

#### On the command line

```sh
sails generate sails-generate-frontend
```

#### In a node script

```javascript
var generate = require('sails-generate');
var scope = {};
generate(require('sails-generate-frontend'), scope, function (err) {
	if (err) throw err;

	// Log output available in `scope` for your enjoyment:
	console.log(scope);
});
```


## Contributing to this generator

See `CONTRIBUTING.md`.

## License

See `LICENSE.md`.

