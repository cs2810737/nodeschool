var fs = require('fs')

fs.readFile(process.argv[2], function (err, buffer){
	if (err) throw err;
	var counter = 0
	for (var i = 0; i < buffer.length; i++) {
		if (buffer[i] == '\n'.charCodeAt() || i == buffer.length -1) {
			console.log(buffer.slice(counter, i))
			counter = i+1
		};
	};
})