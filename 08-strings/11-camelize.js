function camelize(str){
	var arr = str.split(' ');
	var newtxt = '';
	arr.forEach(function(elem){
		var word = elem[0].toUpperCase() + elem.substr(1);
		newtxt+=word
	})
	return newtxt;
}