function removeDuplicate(input){
	var cleanArr = [];
	function checkelement(elem){
		var count = 0;
		input.forEach(function(elemExisting){
			if(elem === elemExisting){
				count++;
			}
		}	
		return count;
	}
	input.forEach(function(elem, index, arr){
		console.log(count);
		if(count > 1){
			cleanArr.push(elem);
		}
	})
	return cleanArr;
}