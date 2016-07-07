function removeDuplicate(input){
	var cleanArr = [];
	function checkelement(elem){
		var count = 0;
		for(i=0;i<input.length;i++){
			if(input[i]===elem){
				count++
			}
		}
		return count;
	}
	input.forEach(function(elem, index, arr){
		if(checkelement(elem) <= 1){
			cleanArr.push(elem);
		}
	})
	return cleanArr;
}