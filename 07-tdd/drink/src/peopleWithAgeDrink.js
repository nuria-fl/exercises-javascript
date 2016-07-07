function peopleWithAgeDrink(age){

	if(typeof(age)!= "number") return 'age is not a number';
	
	if(age>=21) return 'drink whisky';
	if(age>=18) return 'drink beer';
	if(age>=14) return 'drink coke';
	
	return 'drink toddy';
}