function translate(str){
	arr = str.split('');
	newarr = [];
	for(i=0;i<arr.length;i++){
		if(arr[i] !== 'a' && arr[i] !== 'e' && arr[i] !== 'i' && arr[i] !== 'o' && arr[i] !== 'u' && arr[i] !== ' ') {
			newarr[i] = arr[i]+'o'+arr[i];
		} else {
			newarr[i] = arr[i];
		}
	}
	return newarr.join('');
}