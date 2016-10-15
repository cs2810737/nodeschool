var http = require('http');
var url = require('url');

function formatTime(date){
	return {
		hour: date.getHours(),
		minute: date.getMinutes(),
		second: date.getSeconds()
	}
}

function formatUnix (date){
	return {
		unixtime: date.getTime()
	}
}

function processRequest (urlPath, date){
	var result = {};
	if (urlPath === "/api/parsetime") {
		result = formatTime(date);
	} else if (urlPath === "/api/unixtime") {
		result = formatUnix(date)
	}
	return result;
}

var server = http.createServer (function (req, res){
	var urlInfos = url.parse(req.url, true);
	var date = new Date(urlInfos.query.iso);
	var data = processRequest(urlInfos.pathname, date);

	if (data) {
		res.writeHead(200, {'Content-Type':'application/json'});
		res.end(JSON.stringify(data));
	} else {
		res.writeHead(404);
		res.end();
	}
})

server.listen(process.argv[2])
