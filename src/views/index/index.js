var template = require('../../js/template');
var data = {list:[]};
var container = require('./container.html');
var list = ['./part1','./part2'];
list.forEach(function(item){
	console.log(item);
	template(item, require(item+'.html'));
	data.list.push(item);
});
module.exports = template.compile(container)(data);
