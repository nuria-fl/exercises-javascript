function swapcase(str){
	var newstr = '';
	for(i=0;i<str.length;i++){
		//is uppercase
		if(str[i] === str[i].toUpperCase()){
			newstr+=str[i].toLowerCase();
		} else {
			newstr+=str[i].toUpperCase();
		}
	}
	return newstr;
}