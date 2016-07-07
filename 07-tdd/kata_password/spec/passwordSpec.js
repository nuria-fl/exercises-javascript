describe("function password that ", function() {

    it("should exist", function(){
        expect( password ).toBeDefined();
    });

    it("should return boolean", function(){
        var result = password('a');
        expect( typeof(result) ).toBe("boolean");
    });

    it("should have 10 or more characters", function(){
        var result = password('1234');
        expect( result ).toBe(false);
    });

    it("should have one or more $ # % & - ! ?", function(){
        var result = password('1234567890');
        expect( result ).toBe(false);
    });

    it("should have at least 2 numbers", function(){
        var result = password('aaa');
        expect( result ).toBe(false);
    });

    it("should have at least one uppercase letter", function(){
        var result = password('aaaaaaaaa$12asdad');
        expect( result ).toBe(false);
    });

    it("should have 10 or more characters, at least 2 numbers, one or more $ # % & - ! ?", function(){
        var result = password('aAaaaaaaaaa12$');
        expect( result ).toBe(true);
    });

    it("should have config object ", function(){
        var result = password('aAa~a$aaaaAaaa122', {
            size : 12,
            uppercase : 2,
            numbers : 3,
            special : "$#%&-!?~" 
        });
        expect( result ).toBe(true);
    });
    it("should have some config parameters ", function(){
        var result = password('aAa~a$aaaaAaaa122', {
            size : 12,
            numbers : 3,
        });
        expect( result ).toBe(true);
    });

});