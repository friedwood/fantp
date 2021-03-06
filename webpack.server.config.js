var fs = require('fs')
var path = require('path')

module.exports = {

	entry: ['babel-polyfill', path.resolve(__dirname, 'server/server.production.js')],

	output: {
		filename: 'server/server.bundle.js'
	},

	target: 'node',

	// keep node_module paths out of the bundle
	externals: fs.readdirSync(path.resolve(__dirname, 'node_modules')).concat([
		'react-dom/server', 'react/addons',
	]).reduce(function(ext, mod) {
		ext[mod] = 'commonjs ' + mod
		return ext
	}, {}),

	node: {
		__filename: true,
		__dirname: true
	},

	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader?presets[]=es2015&presets[]=react'
		}]
	}

}
