var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var projectRoot = path.resolve(__dirname, '../src/');
var distRoot = path.resolve(__dirname, '../dist/');
module.exports = {
	entry:{
		app:path.resolve(__dirname,"../src/js/test.js"),
//		zrender:["zrender"],
	},
//	resolve: {
//		extensions: ['.html', '.js', '.vue'],
//		fallback: [path.join(__dirname, '../node_modules')],
//		alias: {
//			'vue$': 'vue/dist/vue',
//			'src': path.resolve(__dirname, '../src'),
//			'assets': path.resolve(__dirname, '../src/assets'),
//			'components': path.resolve(__dirname, '../src/components')
//		}
//	},
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
	      	},
//	      	{
//		        test: /\.ejs/,
//		        loaders: 'ejs-loader',
//		        include: projectRoot,
//		        exclude: /node_modules/
//	      	}
  		]
  	}
}
