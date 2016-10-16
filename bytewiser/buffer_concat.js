var arrayToConcat = []

process.stdin.on('data', function (buffer){
	arrayToConcat.push(buffer)
})

process.stdin.on('end', function (){
	console.log(Buffer.concat(arrayToConcat))
})