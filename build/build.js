var webpack = require("webpack");
var config = require('./webpack.config');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var html = require("html-webpack-plugin");
var path = require("path");
config.plugins = [
	new html({
		template:path.resolve(__dirname, "../src/views/index/index.js"),
		filename:"productManager.html",
	}),
//	new ExtractTextPlugin("[name]-[hash].css")
]
console.log(config.entry);
webpack(config,function(err,stats){
	if(err) throw err;
	var jsonStats = stats.toJson();
	if(jsonStats.errors.length>0){
		console.error(jsonStats.errors);
	}else{
		console.log("success");
	}
});