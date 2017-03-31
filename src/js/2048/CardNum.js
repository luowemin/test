var Base = require('../zrender/shape/Base');
var util = require('../zrender/tool/util');
var color = require('../zrender/tool/color');
var baseColor = "#00aaff";
var CardNum = function(options){
	Base.call(this,options);
	this.num = options.num;
	this.xIndex = 0;
	this.yIndex = 0;
}

CardNum.prototype = {
	type:'cardNum',
	brush:function(ctx,isHighlight){
		var style = this.style || {};
		var num = this.num;
        if (isHighlight) {
            // 根据style扩展默认高亮样式
            style = this.highlightStyle || {};
            for (var k in this.style) {
                style[k] = this.style[k];
            }
        }
        ctx.save();
        ctx.beginPath();
		var bgc = color.lift(baseColor,0.5);
        ctx.fillStyle = bgc;
        ctx.fillRect(style.x,style.y,style.width,style.height);
        var tx = style.x + style.width/2;
        var ty = style.y + style.height/2;
        ctx.fillStyle= "white";
        ctx.textAlign="center";
        ctx.textBaseline="middle";
        ctx.font = "20px Arial";
        ctx.fillText("2048", tx,ty); 
        ctx.closePath();
        ctx.stroke();
        ctx.restore();
        return;
	},
	drift:function(dx,dy){
		this.style.x += dx;
		this.style.y += dy;
	},
	isCover:function(x,y){
        if (x >= (this.style.x - this.style.width / 2)
            && x <= (this.style.x + this.style.width / 2)
            && y >= this.style.y - this.style.height / 2
            && y <= (this.style.y + this.style.height / 2)
        ) {
            return true;
        }
        return false;
	}
};
util.inherits(CardNum, Base);
function initCard(boradInfo){
	var lineLen = boradInfo.lineLen;
}
module.exports = CardNum;
