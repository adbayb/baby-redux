const path = require("path");

module.exports = {
	name: "lib",
	target: "web",
	entry: path.resolve(__dirname, "../lib/index.js"),
	output: {
		filename: "baby-redux.js",
		path: path.resolve(__dirname, "../dist"),
		// cf. https://webpack.js.org/guides/author-libraries/
		// Ci-dessous on definit le mode d'import de notre librairie
		// en mode ES5. A noter que pour permettre l'import en mode ES2015+
		// en meme temps qu'ES5, il suffit de specifier l'entry point "module"
		// dans notre package.json (webpack resoudra alors "module" lorsqu'on importera
		// en mode ES2015 au lieu de resoudre "main" => main sera alors utilise pour importer du code ES5
		// en mode script window ou commonjs (cf. https://github.com/webpack/webpack/issues/1979).
		// Si "module" n'est pas specifie, webpack resoudra les imports l'entry point main (en mode ES5 commonjs (require)).

		// library permet d'affecter le nom lors du require...
		// On peut ne pas le specifier de telle sorte que les exports nommes (ie non default)
		// soit accessible directement depuis l'objet globale (window, ...) 
		// sans devoir passer par le nom de la librairie mais ici on specifie le nom de notre librarie pour 
		// eviter les effets de bord sur l'objet globale hostant notre librarie:
		library: "BabyRedux",

		// from webpack documentation (https://webpack.js.org/configuration/output/#output-librarytarget):
		// libraryTarget: "umd" - This is a way for your library to work 
		// with all the module definitions (and where aren't modules at all).
		// It will work with CommonJS, AMD and as global variable (umd checks type of exports in order to choose the 
		// right loader (commonjs, window, global, var...)):
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