function string_parameterize(str){
	var arr = str.toLowerCase().split('');
	arr = arr.filter(function(elem){
		return elem != '.' && elem != ',' && elem != ':' && elem != ';';
	})
	cleanStr = arr.join('');
	return cleanStr.split(' ').join('-');
}