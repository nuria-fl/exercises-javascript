function abbrev_name(str){
	var arr = str.split(' ');
	var abbr = arr[0] + ' ' + arr[1].charAt(0) + '.';
	return abbr;
}