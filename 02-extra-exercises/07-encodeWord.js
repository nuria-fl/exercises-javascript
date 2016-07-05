function encodeWord(str){
	var newstr = '';
	for(i=0;i<str.length;i++){
		if(str[i]==='T'){
			newstr += '7';
		} else if(str[i]==='A'){
			newstr += '4';
		} else if(str[i]==='S'){
			newstr += '5';
		} else if(str[i]==='O'){
			newstr += '0';
		} else {
			newstr += str[i];
		}
	}
	return newstr;
}