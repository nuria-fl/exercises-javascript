function getRange(x1,x2){
	if(x2 < x1){
		return -1;
	}
	var result = '';
	for(var i = x1; i <= x2; i++){
		result += i + ' ';
	}
	return result;
}