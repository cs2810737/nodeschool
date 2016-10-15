var modi= require('./module')

modi(process.argv[2], process.argv[3],callback);

function callback (err){
	console.log(err)
}

function callback (err, data){
	for (var i = 0; i < data.length; i++) {
		console.log(data[i])
	};
}
//(module.js)
var fs = require('fs')
var path = require('path')

function mod_function(dirPath, fileExt, callback){
	fs.readdir(dirPath, function(err, data){
		if (err) return callback(err)
		var list = data.filter(function(datum){
			if (path.extname(datum) === '.'+fileExt) return datum;
		})
		callback(err, list)//notice didn't export null
	})
}

module.exports = mod_function;
