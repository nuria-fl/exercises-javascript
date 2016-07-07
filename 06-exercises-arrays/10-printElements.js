function printElements(arr){
	var str = '';
	arr.forEach(function(subArray, index){
		str+='Row '+index+'\n'
		subArray.forEach(function(element){
			str+=element+'\n'
		})
	})
	return str;
}