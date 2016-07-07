function fibonacci(n){
	seq = [0,1];

	for(i=0;i<(n-1);i++){
		var newNum = seq[i]+seq[i+1];
		seq.push(newNum);
	}
	
	return seq[n];
}

function recursive(n){
	if(n>1)	{
		return	fibonacci(n-1) + fibonacci(n-2);
	} else {
		return n;
	}
}

function fibonacciSuperAwesome(n) {
	if( n>1 ) return (fibonacci(n-1) + fibonacci(n-2));
 	else return (n===1) ? 0 : 1;
}