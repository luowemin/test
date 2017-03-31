var zrender = require('../zrender/zrender');
var Group = require('../zrender/Group');
var util = require('../zrender/tool/util');
var rectShape = require('../zrender/shape/Rectangle');
var TextShape = require('../zrender/shape/Text');
var CardNum = require('./CardNum');
var zr = zrender.init(document.getElementById('face'));
var g = require('./GameBorad')(zr);
zr.addGroup(g);
zr.addShape(new CardNum({
	style:{
		x:10,
		y:10,
		width:60,
		height:60
	},
	draggable : true
}));
zr.render(function(){
	
});