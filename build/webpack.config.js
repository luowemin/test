var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var projectRoot = path.resolve(__dirname, '../src/');
var distRoot = path.resolve(__dirname, '../dist/');
module.exports = {
	entry:{
		app:path.resolve(__dirname,"../src/js/productManager/index.js"),
//		zrender:["zrender"],
	},
	externals:{"vue":"Vue"},
	output:{
		path:path.resolve(__dirname, '../dist'),
		publicPath:"/",
		filename:"[name].js"
	},
  	module:{
  		loaders:[
			{
		        test: /\.css$/,
		        loaders: 'style-loader!css-loader',
//		        loader: ExtractTextPlugin.extract("style-loader","css-loader"),
		        include: projectRoot,
		        exclude: /node_modules/
	      	},
	      	{
		        test: /\.html/,
		        loaders: 'html-loader',
		        include: projectRoot,
		        exclude: /node_modules/
	      	}
  		]
  	}
}
