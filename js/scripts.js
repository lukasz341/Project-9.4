// scripts.js
function drawTree(h){
	for (var i=1; i<=h; i++){
		var star='';
		var spacja='';
		for (var j=1; j<=i; j++){
			star+= '*';
		}
		console.log(star);	
	}
}

drawTree(7);