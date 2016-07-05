function tablaMultiplicar(){
	str = '\n';
	for(i=1;i<=10;i++){
		for(j=1;j<=10;j++){
			str += i*j+ '\t';
		}	
		str += '\n';
	}
	return str;
}