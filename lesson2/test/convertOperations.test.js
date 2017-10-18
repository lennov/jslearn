import convertOperations from '../src/convertOperations'
import {
    operations,
    operations_with_duplication,
    desired,
    desired_with_extra_links
} from '../test/convertOperations.res'

describe('convertOperations', function() {

    it('should convert operations', function() {
        expect(convertOperations(operations)).toEqual(desired);
    });

    it('should convert operations with unique links', function() {
        expect(convertOperations(operations_with_duplication)).toEqual(desired_with_extra_links);
    });

});
