function calculatorPlus(operation){
	var result = arguments[1];
	for (i=2;i<arguments.length;i++){
		if(operation === 'suma'){
			result += arguments[i];
		} else if(operation === 'resta'){
			result -= arguments[i];
		} else if(operation === 'multiplicacion'){
			result *= arguments[i];
		} else if(operation === 'division'){
			result /= arguments[i];
		}
	}
	return result;
}