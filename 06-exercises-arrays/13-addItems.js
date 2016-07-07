addItems = (function(){
	var arr = [];
	return function (){
		for (i=0;i<arguments.length;i++){
			arr.push(arguments[i])
		}		
		return arr;
	}
})();