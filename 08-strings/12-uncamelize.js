function uncamelize(str, separator){
	if(!separator) separator = ' ';
	var newstr = '';
	for(i=0;i<str.length;i++){

		// if the character is uppercase
		if(str[i]===str[i].toUpperCase()){
			newstr+=separator+str[i].toLowerCase();
		} else {
			newstr+=str[i];
		}
	}
	return newstr;
}