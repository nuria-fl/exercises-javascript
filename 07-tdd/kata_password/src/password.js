function password(str, config){
	if(!config){
		config = {}	    
	} 
	if(!config.size) {
		config.size = 10
	}
	if(!config.uppercase) {
		config.uppercase = 1
	}
	if(!config.numbers) {
		config.numbers = 2
	}
	if(!config.special) {
		config.special = "$#%&-!?"
	}
	
	var specialChars = '[\\' + config.special.split('').join('\\') + ']';
	var re = new RegExp(specialChars, "g");
	var numCharacters = str.length;
	
	var bHasMoreNine = (numCharacters >= config.size );
	var bContainsSpecialChars = re.test(str);
	var bContainsMoreXNumbers = str.match(/[0-9]/g) ? (str.match(/[0-9]/g).length >= config.numbers) : false ;
	var bContainsUppercaseLetter =  str.match(/[A-Z]/g) ? (str.match(/[A-Z]/g).length >= config.uppercase) : false ;
	
	return bHasMoreNine && bContainsSpecialChars && bContainsMoreXNumbers && bContainsUppercaseLetter;
	
}

/* OLD VERSION 
	function password(str){

		function validate(str, param, min){
			var count = 0;
			for (var i = 0; i < str.length; i++) {
				for (var ii = 0; ii < param.length; ii++) {
					if(str[i] === param[ii]){
						count++;
						if(count===min){
							return true;	
						}					
					}
				}
			}
		}
		
		if(str.length > 9 && validate(str, '$#%&-!?', 1) && validate(str, '0123456789', 2) && validate(str, 'ABCDEFGHIJKLMNOPQRSTUVWXYZÑÇ', 1)){
			return true	
		} else {
			return false
		}	
	}
*/