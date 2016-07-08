describe("object game that ", function() {

    it("should exist", function(){
    	var game = createGame();
        expect( game ).toBeDefined();
    });


});

describe("game.rockPaperScissors", function() {
	
	var game;

	beforeEach(function() {
	   var game = createGame();
	});

	it("should return string", function(){
		var game = createGame();
	    var result = game.rockPaperScissors('ROCK');
	    expect( typeof(result) ).toBe('string');
	});

	it("should return 'error' if parameters are not PAPER, SCISSORS or ROCK", function(){
		var game = createGame();
	    var result = game.rockPaperScissors('a');
	    expect( result ).toBe('error');
	});

	it("should return 'tie' if both moves are the same", function(){
		var game = createGame();
	    var result = game.rockPaperScissors('ROCK','ROCK');
	    expect( result ).toBe('ROCK vs ROCK => tie!');
	});

	it("should return 'ROCK vs SCISSORS => ROCK wins!' when called with ROCK, SCISSORS", function(){
		var game = createGame();
	    var result = game.rockPaperScissors("ROCK","SCISSORS");
	    expect( result ).toBe('ROCK vs SCISSORS => ROCK wins!');
	});

	it("should return 'PAPER vs ROCK => PAPER wins!' when called with PAPER,ROCK", function(){
		var game = createGame();
	    var result = game.rockPaperScissors("PAPER","ROCK");
	    expect( result ).toBe('PAPER vs ROCK => PAPER wins!');
	});

	it("should return 'SCISSORS vs PAPER => SCISSORS wins!' when called with SCISSORS, PAPER", function(){
		var game = createGame();
	    var result = game.rockPaperScissors("SCISSORS","PAPER");
	    expect( result ).toBe('SCISSORS vs PAPER => SCISSORS wins!');
	});

	it("should return 'SCISSORS vs ROCK => ROCK wins!' when called with SCISSORS, ROCK", function(){
		var game = createGame();
	    var result = game.rockPaperScissors("SCISSORS","ROCK");
	    expect( result ).toBe('SCISSORS vs ROCK => ROCK wins!');
	});

	it("should return 'ROCK vs PAPER => PAPER wins!' when called with ROCK,PAPER", function(){
		var game = createGame();
	    var result = game.rockPaperScissors("ROCK","PAPER");
	    expect( result ).toBe('ROCK vs PAPER => PAPER wins!');
	});

	it("should return 'PAPER vs SCISSORS => SCISSORS wins!' when called with PAPER, SCISSORS", function(){
		var game = createGame();
	    var result = game.rockPaperScissors("PAPER","SCISSORS");
	    expect( result ).toBe('PAPER vs SCISSORS => SCISSORS wins!');
	});
	
	it("should generate a random move when called with only one parameter", function(){
		var game = createGame();
	    var result = game.rockPaperScissors("PAPER");
	    var pieces = result.split(' ');
	    expect( pieces[2] === 'ROCK' || pieces[2] === 'PAPER' || pieces[2] === 'SCISSORS' ).toBe(true);
	});

	it("should increment player1 count every time a player wins", function(){
		var game = createGame();
	    game.rockPaperScissors("PAPER", "ROCK");
	    expect( game.player1 ).not.toBe(0);
	});
});

describe("game.winner", function() {
	it("should return string", function(){
		var game = createGame();
	    var result = game.winner();
	    expect( typeof(result) ).toBe('string');
	});
	it("should return tie if game.player1 is equal to game.player2", function(){
		var game = createGame();
	    var result = game.winner();
	    expect( result ).toBe('tie');
	});
	it("should return 'player 1 is winning' if player1 has more points than player2", function(){
		var game = createGame();
		game.rockPaperScissors('PAPER', 'ROCK');
	    var result = game.winner();
	    expect( result ).toBe('player1 is winning!');
	});
	it("should return 'player 2 is winning' if player1 has less points than player2", function(){
		var game = createGame();
		game.rockPaperScissors('ROCK', 'PAPER');
	    var result = game.winner();
	    expect( result ).toBe('player2 is winning!');
	});
});