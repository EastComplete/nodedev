


var fs = require('fs');
var  buf = new Buffer(256);
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


	})
}

ReadFile(process.argv[2]);


/* 
사유  newline이 1개 있으면, split 된 문자열이 2개임    
예를 들어   a \n  b 가 있다면   split 된 것이 2개 
그래서 split된 문자 배열에서 -1을 한것이 newline임 


var newlinecount = Number(lines.length) -1;


console.log (newline.count);

 */

/*
 var str = buf.toString();
 //console.log(str);

 var result = str.split('\n');

 for ( var i = 0; i < result.length ; i++)
 {
 console.log(result[i]);

 }
 */
