function asyncFuction(callback)
{
	setTimeout(callback,200);
}


var color = "blue";

/*
asyncFuction(function  (color) {
	// body...

	console.log('The Color is ' + color);

});
*/


(function(color) {
	asyncFuction(function(){
		console.log('The Color is ' + color);
	})
})(color);

color = 'green';