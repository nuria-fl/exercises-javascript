function maxOfThree(x,y,z){
	var largest = 0;
	for(i=0;i<arguments.length;i++){
		if (arguments[i] > largest){
			largest = arguments[i]
		}
	}
	return largest;
}