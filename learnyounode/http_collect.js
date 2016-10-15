var http = require('http')

var string = '';
http.get(process.argv[2], function callback (res){
	res.on('data', function(datum){
		string += datum
	})
	res.on('end', function(){
		console.log(string.toString().length);
		console.log(string.toString())
	})
})
