
var fs = require('fs');

var path = process.argv[2];
var extension = process.argv[3];

//console.log(process.argv[2]);
//console.log(process.argv[3]);



function ReadDir( path, extension)
{
	//fs.readFile(filename, function doneReading(err, fileContents)
	fs.readdir(path,function DoneReading(err, files)
	{
		console.log(files.length);


		for ( var i =0; i<files.length ; i++)
		{
			console.log(files[i]);
			//console.log(path.extname(files[i]));

		}

		/*
		str = 	fileContents.toString();
		lines = str.split('\n');


		newLineCount = Number(lines.length) -1;


		console.log (newLineCount);
	*/

	})
}

ReadDir(path, extension);


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