function findLongestWord(arr){
	var longest = '';
	for(i=0;i<arr.length;i++){
		if(arr[i].length > longest.length){
			longest = arr[i];
		}
	}
	return longest;
}