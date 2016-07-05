function filterLongWords(arr, x){
	var newarr = [];
	for(i=0;i<arr.length;i++){
		if(arr[i].length>x){
			newarr.push(arr[i]);
		}
	}
	return newarr;
}