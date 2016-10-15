var buffer = new Buffer(process.argv.length-2)

for (var i = 2; i < process.argv.length; i++) {
	buffer[i-2]= process.argv[i]
};

console.log(buffer.toString('hex'))