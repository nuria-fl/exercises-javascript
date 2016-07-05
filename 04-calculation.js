function calculation(){
	var str = '';
	var sum = 0;
	for(i=0;i<=500;i++){
		if(i%23===0){
			str += i+' ';
		}
	}
	var arr = str.split(' ');
	console.log(arr);
	for(i=0;i<arr.length-1;i++){
		var num = arr[i];
		sum += parseInt(num);
	}
	return 'Elements: ' + str +'\n'+ 'Sum: '+ sum;
}