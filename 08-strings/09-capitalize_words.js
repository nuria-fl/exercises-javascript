function capitalize_words(str){
	var arr = str.split(' ');
	var newtxt = [];
	arr.forEach(function(elem){
		var word = elem[0].toUpperCase() + elem.substr(1);
		newtxt.push(word);
	})
	return newtxt.join(' ');
}