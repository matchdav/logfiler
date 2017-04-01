var fs= require('fs'), 
	append=fs.appendFileSync, 
	path=require('path'), 
	util = require('util');


var base = "";

function fname(){
	return (new Date(Date.now())).getTime()+".log";
}

var filename = fname();

function toArray(obj){
	return Array.prototype.slice.call(obj);
}

function log(){
	var localpath = path.join(base,filename);
	var now = new Date(Date.now());
	var args = toArray(arguments);
	args.forEach(function(item,i){
		append(localpath, [now, util.inspect(item),""].join("\n") );
	});
	return append(localpath,"");
}

module.exports = log;

log.path = function(dir){
	if(dir){
		base = path.resolve(__dirname,dir);
		filename = fname();
	}
}
