function rockPaperScissors(player1, player2){
	
	var moves = ['ROCK', 'PAPER', 'SCISSORS'];
	var result = '';
	
	// GENERATE RANDOM MOVE FOR PLAYER 2 IF IT'S NOT DEFINED
	if(!player2) {
		var random = Math.round(Math.random() * (2 - 0) + 0);
		player2 = moves[random];
	}
	
	//CHECK IF THE PARAMETERS ARE VALID MOVES
	if( moves.indexOf(player1) === -1 || moves.indexOf(player2) === -1  ) {
		result = 'error';
	} else {
		result = player1 + ' vs ' + player2 + ' => ';
	}

	if(player1 === player2){
		result+='tie!';
	}

	//PLAYER 1 WINS
	if( player1 === 'SCISSORS' && player2 === 'PAPER' ||
		player1 === 'ROCK' && player2 === 'SCISSORS' ||
		player1 === 'PAPER' && player2 === 'ROCK' ){
		result += player1 +' wins!';
	}

	//PLAYER 2 WINS
	if( player1 === 'PAPER' && player2 === 'SCISSORS' ||
		player1 === 'SCISSORS' && player2 === 'ROCK' ||
		player1 === 'ROCK' && player2 === 'PAPER' ){
		result += player2 +' wins!';
	}

	return result;	

}