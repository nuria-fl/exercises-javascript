function mostFrequentItem(arr){

	function charFreq(str){
		var freq = {};
		for(i=0;i<str.length;i++){
			currentChar = str[i];
			if(!freq[currentChar]){
				freq[currentChar] = 0;	
			}
			freq[currentChar]++;	
		}
		return freq;
	}
	freqMap = charFreq(arr);
	var max = 0;
	var maxValue = null;
	for (prop in freqMap){
		if(freqMap[prop] > max){
			max = freqMap[prop];
			maxValue = prop;
		}
	}
	return maxValue + ' ('+ max +' times)';
}