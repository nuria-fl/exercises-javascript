function calculator(operation, x, y){
	if(operation === 'suma'){
		return x + y;
	} else if(operation === 'resta'){
		return x - y;
	} else if(operation === 'multiplicacion'){
		return x * y;
	} else if(operation === 'division'){
		return x / y;
	} else {
		return null;
	}
}