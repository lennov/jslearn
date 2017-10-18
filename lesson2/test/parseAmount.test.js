import parseAmount from '../src/parseAmount'

describe('parseAmount', function() {
    it('should parse integer string', function() {
        expect(parseAmount('100')).toBe(10000);
    });

    it('should parse float string with comma', function() {
        expect(parseAmount('100,4')).toBe(10040);
    });

    it('should parse float string with point', function() {
        expect(parseAmount('100.5')).toBe(10050);
    });

    it('should parse zero', function() {
        expect(parseAmount('0')).toBe(0);
    });

    it('should NOT parse symbols', function() {
        expect(isNaN(parseAmount('ABS'))).toBe(true);
    });

});
