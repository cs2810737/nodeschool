process.stdin.on('data', function (buffer){
	var uInt8View = new Uint8Array(buffer)
	console.log(JSON.stringify(uInt8View))
})