import {
    sum
} from '../src/homework'

describe('sum', function() {

    it('should return sum of operands', function() {
        expect(sum(1, 2)).toBe(3);
    });

});
