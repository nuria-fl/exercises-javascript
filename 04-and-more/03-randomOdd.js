function randomOdd(){
	var x = Math.floor(Math.random()*100);
	var nums = '';
	if(x>40){
		for(i=40;i<x;i++){
			if(i%2!==0){
				nums += i+' ';
			}
		}
		return nums;
	}
}