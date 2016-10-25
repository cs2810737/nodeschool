var duplexer = require('duplexer2')
var spawn = require('child_process').spawn

module.exports = function (cmd, args) {
	spawned = spawn(cmd, args)
	return duplexer(spawned.stdin, spawned.stdout)
}