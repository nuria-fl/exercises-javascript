// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them

describe("function maxOfThree that ", function() {
    it("should exist", function(){
        expect( maxOfThree ).toBeDefined();
    });
    it("should return a number", function(){
        var result = maxOfThree(1,2,3);
        expect( typeof(result) ).toBe("number");
    });
    it("should return 3 when called maxOfThree(2,3,1)", function(){
        var result = maxOfThree(2,3,1);
        expect( result ).toBe(3);
    });
    it("should return 3 when called maxOfThree(1,2,3)", function(){
        var result = maxOfThree(1,2,3);
        expect( result ).toBe(3);
    });
    it("should return 3 when called maxOfThree(3,2,1)", function(){
        var result = maxOfThree(3,2,1);
        expect( result ).toBe(3);
    });
    it("should return 3 when called maxOfThree(1,3)", function(){
        var result = maxOfThree(1,3);
        expect( result ).toBe(3);
    });
    it("should return 3 when called maxOfThree(-8,3)", function(){
        var result = maxOfThree(-8,3);
        expect( result ).toBe(3);
    });
});