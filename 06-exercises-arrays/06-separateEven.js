function separateEven(num){
	var newArr = num.toString().split('');
	var arrLength = newArr.length;
	var str = '';
	newArr.forEach(function(elem, pos, arr){
		str+=elem;
		if(elem % 2 ===0 && arr[pos+1]% 2 ===0 ){
			str+='-'
		}
	})
	return str;
}