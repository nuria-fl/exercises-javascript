function showChoices(){
	var color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
	var o = ["th","st","nd","rd"];
	var str = '';
	color.forEach(function(elem, pos){
		var num = pos+1;
		var order = o[0];
		if(num < 4){
			order = o[num];
		}
		str+=(num + order + ' choice is '+elem+'\n');
	})
	return str;
}