import sum from "../src/Sum"

describe("Sum", function(){

    it("should return sum of args", function(){
        expect(sum(0)()).toBe(0);
        expect(sum(0)(1)(2)(3)(4)(5)()).toBe(15);
        expect(sum(0)(1)(2)(3)(4)(-5)()).toBe(5);
        expect(sum(0)(-1)(-2)(-3)(-4)(-5)()).toBe(-15);
    })
    
})
