function repeat(word, times){
	if(!times) times = 1;
	var repeated = '';
	for(i=0;i<times;i++){
		repeated+=word;
	}
	return repeated;
}