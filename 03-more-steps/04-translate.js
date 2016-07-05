function translate(str){
	var dictionary = {
		"merry":"god", 
		"christmas":"jul", 
		"and":"och", 
		"happy": "gott", 
		"new":"nytt", 
		"year":"år"
	}
	var arr = str.split(' ');
	var translation = [];
	function checkWord(word){
		for(prop in dictionary){
			if(word === prop){
				return dictionary[prop];
			}
		}
	}
	for(i=0;i<arr.length;i++){
		translation.push(checkWord(arr[i])||arr[i]);
	}
	return translation.join(' ');
	
}