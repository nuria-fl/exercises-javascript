function joinElements(arr){
	// return arr.join(',');
	var str = '';
	var arrLength = arr.length;

	arr.forEach(function(elem, pos){
		str+=elem;
		if(pos != arrLength-1){
			str+=',';
		}
	})
	return str;
}