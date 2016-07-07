//https://github.com/juanmaguitar/exercises-katas-js/tree/master/DrinkAbout


describe("function fizzbuzz that ", function() {

    it("should exist", function(){
        expect( fizzbuzz ).toBeDefined();
    });

    it("should return an array", function(){
        var result = fizzbuzz();
        expect( result.constructor ).toBe(Array);
    });

    it("should return an array of 100 elements", function(){
        var result = fizzbuzz();
        expect( result.length ).toBe(100);
    });

    it("should return 'Fizz' every 3", function(){
        var result = fizzbuzz();
        expect( result[2] ).toBe('Fizz');
    });

    it("should return 'Buzz' every 5", function(){
        var result = fizzbuzz();
        expect( result[4] ).toBe('Buzz');
    });

    it("should return 'FizzBuzz' if %3 and %5", function(){
        var result = fizzbuzz();
        expect( result[14] ).toBe('FizzBuzz');
    });

    it("should return 'Fizz' if number has 3 in it", function(){
        var result = fizzbuzz();
        expect( result[12] ).toBe('Fizz');
    });

    it("should return 'Buzz' if number has 5 in it", function(){
        var result = fizzbuzz();
        expect( result[51] ).toBe('Buzz');
    });


});