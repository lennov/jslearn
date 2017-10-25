import makeBuffer from "../src/StringBuffer"

describe('StringBuffer', function() {

    const words = ["Sic", " ", "transit", " ", "gloria", " ", "mundi" ];

    it('should buffer accumulate strings', function() {
        let buffer = makeBuffer();
        words.forEach(part => buffer(part))
        expect(buffer()).toBe(words.join(""));
    });

    it('should clear unempty buffer', function() {
        let buffer = makeBuffer();
        words.forEach(part => buffer(part))
        buffer.clear();
        expect(buffer()).toBe("");
    });

});
