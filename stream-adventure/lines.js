var through = require('through2')
var split = require('split')

case_ = 0

process.stdin
	.pipe(split())
	.pipe(through(function (line, _, next){
		if (case_ % 2 == 0) this.push((line.toString()+'\n').toLowerCase());
		if (case_ % 2 == 1) this.push((line.toString()+'\n').toUpperCase());
		case_ += 1
		next()
	})).pipe(process.stdout)