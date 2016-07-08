function showLeapYears(start, end){
	var leapYears = [];
	if(end < start){
		return "error";
	}
	for(i=start;i<=end;i++){
		if( i%4 === 0 && i%100 != 0 || i%4 === 0  && i%100 === 0 && i%400 === 0){
			leapYears.push(i)
		}
	}
	return leapYears;
}