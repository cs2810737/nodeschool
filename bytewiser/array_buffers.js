var arrayBuffer = new ArrayBuffer(4)
var ui32view = new Uint32Array(arrayBuffer)
ui32view[0] = process.argv[2]
var ui16view = new Uint16Array(arrayBuffer)
console.log(JSON.stringify(ui16view))