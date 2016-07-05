function randomEven(){
	var x = Math.floor(Math.random()*100);
	var nums = '';
	for(i=0;i<=x;i++){
		if(i%2===0){
			nums += i+' ';
		}
	}
	return nums;
}