function fibonacci(n){
	seq = [0,1];

	for(i=0;i<(n-1);i++){
		var newNum = seq[i]+seq[i+1];
		seq.push(newNum);
	}
	
	return seq[n];
}