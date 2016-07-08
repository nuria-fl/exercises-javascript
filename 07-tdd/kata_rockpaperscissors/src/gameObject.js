function createGame() {
	return {
		player1: 0,
		player2: 0,
		rockPaperScissors : function (funPlayer1, funPlayer2){
			var moves = ['ROCK', 'PAPER', 'SCISSORS'];
			var result = '';
			
			// GENERATE RANDOM MOVE FOR PLAYER 2 IF IT'S NOT DEFINED
			if(!funPlayer2) {
				var random = Math.round(Math.random() * (2 - 0) + 0);
				funPlayer2 = moves[random];
			}
			
			//CHECK IF THE PARAMETERS ARE VALID MOVES
			if( moves.indexOf(funPlayer1) === -1 || moves.indexOf(funPlayer2) === -1  ) {
				result = 'error';
			} else {
				result = funPlayer1 + ' vs ' + funPlayer2 + ' => ';
			}

			if(funPlayer1 === funPlayer2){
				result+='tie!';
			}

			//PLAYER 1 WINS
			if( funPlayer1 === 'SCISSORS' && funPlayer2 === 'PAPER' ||
				funPlayer1 === 'ROCK' && funPlayer2 === 'SCISSORS' ||
				funPlayer1 === 'PAPER' && funPlayer2 === 'ROCK' ){
				result += funPlayer1 +' wins!';
				this.player1++;
			}

			//PLAYER 2 WINS
			if( funPlayer1 === 'PAPER' && funPlayer2 === 'SCISSORS' ||
				funPlayer1 === 'SCISSORS' && funPlayer2 === 'ROCK' ||
				funPlayer1 === 'ROCK' && funPlayer2 === 'PAPER' ){
				result += funPlayer2 +' wins!';
				this.player2++;
			}

			return result;	
		},
		winner: function (){
			if (this.player1 === this.player2){
				return 'tie';
			} else if (this.player1 > this.player2){
				return 'player1 is winning!';
			} else {
				return 'player2 is winning!';
			}
		}
	}
};