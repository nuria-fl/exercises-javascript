function randomOne(){
	var x = Math.floor(Math.random()*(9999-1000)+1000);
	x = x.toString();
	var result = 0;
	for (i=0;i<x.length;i++){
		result+=parseInt(x[i]);
	}
	result = result.toString();
	if(result.length>1){
		var resultSum = 0;
		for (i=0;i<result.length;i++){
			resultSum+=parseInt(result[i]);
		}	
		return resultSum;	
	} else {
		return result;	
	}
}