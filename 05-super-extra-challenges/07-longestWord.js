function longestWord(str){
	var arr = str.split(' ');
	var longest = '';
	arr.forEach(function(elem){
		if(elem.length>longest.length){
			longest = elem;
		}
	})
	return longest;
}