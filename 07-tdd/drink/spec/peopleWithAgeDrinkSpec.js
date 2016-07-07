// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them

describe("function peopleWithAgeDrink that ", function() {
    it("should exist", function(){
        expect( peopleWithAgeDrink ).toBeDefined();
    });
    it("should return string", function(){
        var result = peopleWithAgeDrink();
        expect( typeof(result) ).toBe("string");
    });
    it("should return 'drink toddy' when called with a value of less than 14", function(){
        var result = peopleWithAgeDrink(13);
        expect( result ).toBe("drink toddy");
    });
    it("should return 'drink coke' when called with a value of less than 18", function(){
        var result = peopleWithAgeDrink(17);
        expect( result ).toBe("drink coke");
    });
    it("should return 'drink beer' when called with a value of less than 21", function(){
        var result = peopleWithAgeDrink(20);
        expect( result ).toBe("drink beer");
    });
    it("should return 'drink whisky' when called with a value equal to or more than 21", function(){
        var result = peopleWithAgeDrink(30);
        expect( result ).toBe("drink whisky");
    });
    it("should return 'age is not a number' when called with a parameter that is not a number", function(){
        var result = peopleWithAgeDrink('30');
        expect( result ).toBe("age is not a number");
    });
});