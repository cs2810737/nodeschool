var concats = require('concat-stream')

process.stdin.pipe(concats(function (buffer){
	console.log(buffer.toString().split('').reverse().join(''))
}))