const path = require("path");

module.exports = {
	name: "example",
	target: "web",
	entry: path.resolve(__dirname, "./src/index.js"),
	output: {
		filename: "app.js",
		path: path.resolve(__dirname, "./public"),
		publicPath: "/"
	},
	resolve: {
		extensions: [".js", ".jsx"]
	},
	module: {
		rules: [{
			test: /\.js[x]?$/,
			// include: path.resolve(__dirname, "./src"),
			// TODO: es5 for baby-redux
			exclude: /node_modules\/(?!baby-redux)/,
			use: "babel-loader"
		}]
	}
};