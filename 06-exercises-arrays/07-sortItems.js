function sortItems(arr){
	function sort(x, y){
		return x-y;
	}
	return arr.sort(sort);
}