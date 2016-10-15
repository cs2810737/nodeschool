function repeat(operation, num){
	if (num != 0) ;
	else {
		operation()
		repeat(operation, num - 1)
	}
	
}

module.exports = repeat