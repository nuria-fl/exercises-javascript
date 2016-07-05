function randomLargest(){
	var x = Math.floor(Math.random()*100);
	var y = Math.floor(Math.random()*100);
	var z = Math.floor(Math.random()*100);
	if(x>y && x>z){
		return x;
	} else if(y>x && y>z){
		return y;
	} else {
		return z;
	}
}