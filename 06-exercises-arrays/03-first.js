function first(arr, n){
	if(!n){
		n=1;
	} else if(n<0){
		n=0;
	}
	return arr.slice(0,n);
}