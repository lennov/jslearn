import convertString from '../src/convertString'

describe('convertString', function(){

    it('should convert string `recede`', function(){
            expect(convertString("recede")).toBe("()()()");
    });

    it('should convert string `din`', function(){
            expect(convertString("din")).toBe("(((");
    });

    it('should convert string `Success`', function(){
            expect(convertString("Success")).toBe(")())())");
    });

    it('should convert string `(( @`', function(){
            expect(convertString("(( @")).toBe("))((");
    });

});
