import SubstitutionCipher from "../src/SubstitutionCipher"

describe('SubstitutionCipher', function() {

    var abc1 = "abcdefghijklmnopqrstuvwxyz";
    var abc2 = "etaoinshrdlucmfwypvbgkjqxz";

    let cipher = new SubstitutionCipher(abc1, abc2);

    let pairs = [
        ["abc", "eta"],
        ["xyz", "qxz"],
        ["aeiou", "eirfg"]
    ];

    it('should encode', function() {
        pairs.forEach(pair => {
            expect(cipher.encode(pair[0])).toBe(pair[1]);
        })
    });

    it('should decode', function() {
        pairs.forEach(pair => {
            expect(cipher.decode(pair[1])).toBe(pair[0]);
        })
    });

});
