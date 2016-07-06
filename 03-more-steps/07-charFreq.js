function isValidChar(char){
	invalidChars = " ,?¿!¡.";
	return (invalidChars.indexOf(char) == -1);
}

function charFreq(str){
	var freq = {};
	for(i=0;i<str.length;i++){
		currentChar = str[i];
		if(isValidChar(currentChar)){
			if(!freq[currentChar]){
				freq[currentChar] = 0;	
			}
			freq[currentChar]++;	
		}		
	}
	return freq;
}