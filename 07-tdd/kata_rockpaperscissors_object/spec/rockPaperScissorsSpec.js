describe("function rockPaperScissors that ", function() {

    it("should exist", function(){
        expect( rockPaperScissors ).toBeDefined();
    });

    it("should return string", function(){
        var result = rockPaperScissors('ROCK');
        expect( typeof(result) ).toBe('string');
    });

    it("should return 'error' if parameters are not PAPER, SCISSORS or ROCK", function(){
        var result = rockPaperScissors('a');
        expect( result ).toBe('error');
    });

    it("should return 'tie' if both moves are the same", function(){
        var result = rockPaperScissors('ROCK','ROCK');
        expect( result ).toBe('ROCK vs ROCK => tie!');
    });

    it("should return 'ROCK vs SCISSORS => ROCK wins!' when called with ROCK, SCISSORS", function(){
        var result = rockPaperScissors("ROCK","SCISSORS");
        expect( result ).toBe('ROCK vs SCISSORS => ROCK wins!');
    });

    it("should return 'PAPER vs ROCK => PAPER wins!' when called with PAPER,ROCK", function(){
        var result = rockPaperScissors("PAPER","ROCK");
        expect( result ).toBe('PAPER vs ROCK => PAPER wins!');
    });

    it("should return 'SCISSORS vs PAPER => SCISSORS wins!' when called with SCISSORS, PAPER", function(){
        var result = rockPaperScissors("SCISSORS","PAPER");
        expect( result ).toBe('SCISSORS vs PAPER => SCISSORS wins!');
    });

    it("should return 'SCISSORS vs ROCK => ROCK wins!' when called with SCISSORS, ROCK", function(){
        var result = rockPaperScissors("SCISSORS","ROCK");
        expect( result ).toBe('SCISSORS vs ROCK => ROCK wins!');
    });

    it("should return 'ROCK vs PAPER => PAPER wins!' when called with ROCK,PAPER", function(){
        var result = rockPaperScissors("ROCK","PAPER");
        expect( result ).toBe('ROCK vs PAPER => PAPER wins!');
    });

    it("should return 'PAPER vs SCISSORS => SCISSORS wins!' when called with PAPER, SCISSORS", function(){
        var result = rockPaperScissors("PAPER","SCISSORS");
        expect( result ).toBe('PAPER vs SCISSORS => SCISSORS wins!');
    });
    
    it("should generate a random move when called with only one parameter", function(){
        var result = rockPaperScissors("PAPER");
        expect( result ).not.toBe('error');
    });

});