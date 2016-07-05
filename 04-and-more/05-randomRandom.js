function randomRandom(){
	var x = Math.floor(Math.random()*100);
	console.log(x);
	var largest = 0;
	for(i=0;i<x;i++){
		var newNum = Math.floor(Math.random()*100);
		console.log(newNum);
		if(newNum>largest){
			largest = newNum;
		}
	}
	return largest
}