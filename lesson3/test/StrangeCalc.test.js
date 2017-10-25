import { one, two, three, four, five, six, seven, eight, nine, zero, times, plus, minus, dividedBy } from "../src/StrangeCalc"

describe('StrangeCalc', function() {


    it('should process plus', function() {
        expect(zero(plus(one()))).toBe(1);
        expect(zero(plus(two()))).toBe(2);
        expect(zero(plus(three()))).toBe(3);
        expect(zero(plus(four()))).toBe(4);
        expect(zero(plus(five()))).toBe(5);
        expect(zero(plus(six()))).toBe(6);
        expect(zero(plus(seven()))).toBe(7);
        expect(zero(plus(eight()))).toBe(8);
        expect(zero(plus(nine()))).toBe(9);
    });

    it('should process minus', function() {
        expect(nine(minus(zero()))).toBe(9);
        expect(nine(minus(one()))).toBe(8);
        expect(nine(minus(two()))).toBe(7);
        expect(nine(minus(three()))).toBe(6);
        expect(nine(minus(four()))).toBe(5);
        expect(nine(minus(five()))).toBe(4);
        expect(nine(minus(six()))).toBe(3);
        expect(nine(minus(seven()))).toBe(2);
        expect(nine(minus(eight()))).toBe(1);
    });

    it('should process times', function() {
        expect(nine(times(zero()))).toBe(0);
        expect(nine(times(one()))).toBe(9);
        expect(nine(times(two()))).toBe(18);
        expect(nine(times(three()))).toBe(9*3);
        expect(nine(times(four()))).toBe(9*4);
        expect(nine(times(five()))).toBe(9*5);
        expect(nine(times(six()))).toBe(9*6);
        expect(nine(times(seven()))).toBe(9*7);
        expect(nine(times(eight()))).toBe(9*8);
        expect(nine(times(nine()))).toBe(9*9);
    });

    it('should process dividedBy', function() {
        expect(nine(dividedBy(zero()))).toBe(Infinity);
        expect(nine(dividedBy(one()))).toBe(9);
        expect(nine(dividedBy(two()))).toBe(4.5);
        expect(nine(dividedBy(three()))).toBe(3);
        expect(nine(dividedBy(four()))).toBe(2.25);
        expect(nine(dividedBy(five()))).toBe(1.8);
        expect(nine(dividedBy(six()))).toBe(1.5);
        expect(nine(dividedBy(seven()))).toBeCloseTo(1.285);
        expect(nine(dividedBy(eight()))).toBe(1.125);
        expect(nine(dividedBy(nine()))).toBe(1);
    });

});
