function protect(email){
	var arr = email.split('@');
	var protected = arr[0];
	protected = protected.slice(0,5);
	return protected + '…@'+arr[1];
}