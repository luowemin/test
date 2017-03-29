var path = require('path');
var express = require('express');
var webpack = require('webpack');
var opn = require('opn');
var proxyMiddleware = require('http-proxy-middleware');
var html = require("html-webpack-plugin");
var webpackConfig = require("./webpack.config.js");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

webpackConfig.devtool = '#eval-source-map';

Object.keys(webpackConfig.entry).forEach(function (name) {
	webpackConfig.entry[name] = [path.resolve(__dirname, './hot-client')].concat(webpackConfig.entry[name]);
});
webpackConfig.plugins = [
    new webpack.DefinePlugin({
      	'process.env.NODE_ENV': '"development"'
    }),
    new webpack.HotModuleReplacementPlugin(),
//  new webpack.NoErrorsPlugin(),
	new html({
		template:path.resolve(__dirname, "../src/html/productManager.ejs"),
		filename:"productManager.html",
	}),
	new webpack.optimize.CommonsChunkPlugin({
      	name: 'vendor',
      	minChunks: function (module, count) {
	        return (
	          	module.resource &&
	          	/\.js$/.test(module.resource) &&
	          	module.resource.indexOf(path.join(__dirname, '../node_modules')) === 0
	        )
      	}
    }),
//  new ExtractTextPlugin("[name].css")
//  new ExtractTextPlugin("[name]-[hash].css",{
//  	allChunks:true
//  })
//  new webpack.optimize.UglifyJsPlugin({
//    	compress: {
//     		warnings: false,
//    	},
//  	except: ['$super', '$', 'exports', 'require']
//  }),
];
// default port where dev server listens for incoming traffic

// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware

var app = express();
var compiler = webpack(webpackConfig);

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
    chunks: false
  }
})

var hotMiddleware = require('webpack-hot-middleware')(compiler)
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

//var config = require("./config");
//var proxyTable = config.proxy;
var port = 8888;//config.port;
//// proxy api requests
//Object.keys(proxyTable).forEach(function (context) {
//	var options = proxyTable[context]
//	if (typeof options === 'string') {
//	    options = { target: options }
//	}
//	console.log(options);
//	app.use(proxyMiddleware(context, options))
//})

//app.use(proxyMiddleware(config.apis, config.options));

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
//var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)

var route = require('../route/productEditServer.js');
route(app);
//Object.keys(route).forEach(function(ctx){
//	app.use(ctx,route[ctx]);
//});
app.use("/", express.static('./static'));
module.exports = app.listen(port, function (err) {
	
  if (err) {
    console.log(JSON.stringify(err));
    return
  }
  var uri = 'http://localhost:' + port+"/";
  console.log('Listening at ' + uri + '\n')
  opn(uri);
})
