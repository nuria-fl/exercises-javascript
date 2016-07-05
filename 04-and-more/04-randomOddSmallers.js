function randomOddSmallers(){
	var x = Math.floor(Math.random()*100);
	var nums = '';
	console.log(x);
	if(x>40){
		for(i=40;i<x;i++){
			if(i%2!==0){
				nums += i+' ';
			}
		}
		
	} else {
		for(i=40;i>=x;i--){
			nums += i+' ';
		}
	}
	return nums;
}