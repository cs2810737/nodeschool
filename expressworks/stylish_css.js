var express = require('express')
var bodyparser = require('body-parser')
var app = express()
app.use(require('stylus').middleware(process.argv[3]))
app.get('/form', function (req, res){
	res.end()
})
app.listen(process.argv[2])