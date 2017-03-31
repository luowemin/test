var LineShape = require('../zrender/shape/Line');
var Group = require('../zrender/Group');
var util = require('../zrender/tool/util');
module.exports = function(zr){
	var width = Math.ceil(zr.getWidth());
	var height = Math.ceil(zr.getHeight());
	var padding = 20;
	var styles = {
		xStart: 0,
	  	yStart: 0,
	  	xEnd: 0,
	  	yEnd: 0,
	  	strokeColor: '#000',
	  	lineWidth: 1
	};
	var lineLen = 300;
	var lineNum = 5;
	var splitNum = lineLen/(lineNum - 1);
	var g = new Group();
	g.position[0] = (width - lineLen)/2;
	g.position[1] = padding;
	for(var i=0;i<lineNum;i++){
		var ss = util.clone(styles);
		ss.xStart = i * splitNum;
		ss.yStart = 0;
		ss.xEnd = ss.xStart;
		ss.yEnd = lineLen;
		g.addChild(new LineShape({style:ss}));
	}
	for(var i=0;i<lineNum;i++){
		var ss = util.clone(styles);
		ss.xStart = 0;
		ss.yStart = i * splitNum;
		ss.xEnd = lineLen;
		ss.yEnd = ss.yStart;
		g.addChild(new LineShape({style:ss}))
	}
	return g;
}
