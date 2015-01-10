var fs = require('fs');
var  buf = new Buffer(256);
//buf =  fs.readFileSync(process.argv[2]);
var str = undefined
var lines = undefined
var newLineCount = undefined

function ReadFile( filename)
{
	fs.readFile(filename, function doneReading(err, fileContents)
	{
		str = 	fileContents.toString();
		lines = str.split('\n');

		newLineCount = Number(lines.length) -1;


		console.log (newLineCount);

		console.log("hello");

		

	})
}

ReadFile(process.argv[2]);



