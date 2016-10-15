var http = require('http')

var finalOutput = [3];
var counter = 0;

for (var i = 0; i < 3; i++) {
	getFunction(i)
}

function getFunction (position){
	http.get(process.argv[position+2], function (res){
		finalOutput[position] = ''
		res.on('data', function(datum){
			finalOutput[position] += datum.toString()
		})
		res.on('end', function(){
			counter++; 
			if (counter==3 ) display();
		})
	})
}

function display (){
	for (var i = 0; i < finalOutput.length; i++) {
		console.log(finalOutput[i]);
	};
}
