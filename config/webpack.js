const path = require("path");

module.exports = {
	name: "lib",
	target: "web",
	entry: path.resolve(__dirname, "../lib/index.js"),
	output: {
		filename: "baby-redux.js",
		path: path.resolve(__dirname, "../dist"),
		library: "BabyRedux",
		libraryTarget: "umd"
	},
	resolve: {
		extensions: [".js", ".jsx"]
	},
	module: {
		rules: [{
			test: /\.js[x]?$/,
			include: path.resolve(__dirname, "../lib"),
			use: "babel-loader"
		}]
	}
};