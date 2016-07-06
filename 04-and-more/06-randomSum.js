function randomSum(){
	var x = Math.floor(Math.random()*(9999-1000)+1000);
	x = x.toString();
	var result = 0;
	for (i=0;i<x.length;i++){
		result+=parseInt(x[i]);
	}
	return result;
}