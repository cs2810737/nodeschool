var net = require('net')
var date;

var server = net.createServer(function (socket){
	date = new Date();
	var Y = date.getFullYear()
	var M = processNumeric(date.getMonth()+1)
	var D = processNumeric(date.getDate())
	var h = processNumeric(date.getHours())
	var m = processNumeric(date.getMinutes())
	var result = (Y+'-'+M+'-'+D+' '+h+':'+ m);
	socket.write(result);
	socket.close()
})

function processNumeric(numeric){
	if (numeric < 10)
		return '0'+numeric;
	else return numeric 
}

server.listen(process.argv[2])

