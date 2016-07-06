function last(arr, n){
	if(!n){
		n=1;
	}
	return arr.slice(-n);
}