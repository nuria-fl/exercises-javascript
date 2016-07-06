function add(input){
	var arr = input.split(',');
	var sum = 0;
	for(i=0;i<arr.length;i++){
		sum += parseInt(arr[i]);
	}
	return sum;
}