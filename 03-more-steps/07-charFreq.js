function charFreq(str){
	var freq = {};
	for(i=0;i<str.length;i++){
		if(!freq[str[i]]){
			freq[str[i]] = 0;	
		}
		freq[str[i]] += 1;
	}
	return freq;
}