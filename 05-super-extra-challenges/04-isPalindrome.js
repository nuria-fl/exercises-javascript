function isPalindrome(string){
	string = string.split(' ').join('');
	reverse = string.split('').reverse().join('');

	if(reverse === string){
		return true;
	} else {
		return false;
	}
}