var through = require('through2')
var http = require('http')

var server = http.createServer(function (req, res){
	if (req.method === 'POST') {
		req.pipe(through(function (buffer, _, next){
			this.push(buffer.toString().toUpperCase())
			next()
		})).pipe(res)
		res.end
	}
})

server.listen(process.argv[2])