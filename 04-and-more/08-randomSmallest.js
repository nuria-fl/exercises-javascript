function randomSmallest(){
	var x = Math.floor(Math.random()*10);
	var y = Math.floor(Math.random()*10);
	var smallest = 0;
	if (x<y){
		smallest = x;
	} else {
		smallest = y;
	}
	for (i=2;i<=smallest;i++){
		if(x%i===0 && y%i===0 ) {
			return i;
		}
	}
	return 'can\'t find number';
	// return smallest;
}