var sum = 0
for (var i = 2; i < process.argv.length; i++) {
	sum += +process.argv[i];
	if (i == process.argv.length - 1) console.log(sum);

};
