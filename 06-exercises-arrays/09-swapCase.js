function swapCase(str){
	var strLength = str.length;
	var newstr = '';
	for(i=0;i<strLength;i++){
		var currentChar = str[i];
		var transformedChar = currentChar;
		if(currentChar === currentChar.toUpperCase()){
			transformedChar = currentChar.toLowerCase();
		} else {
			transformedChar = currentChar.toUpperCase();
		}
		newstr+=transformedChar;

	}
	return newstr;
}