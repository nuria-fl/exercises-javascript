function sum(arr){
	var sum = 0;
	for(i=0;i<arr.length;i++){
		sum+=arr[i];
	}
	return sum;	
}

function multiply(arr){
	var result = arr[0];
	for(i=1;i<arr.length;i++){
		result*=arr[i];
	}
	return result;		
}