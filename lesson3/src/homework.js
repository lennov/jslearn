import SubstitutionCipher from "./SubstitutionCipher"

export function sum(a, b){
    return a + b;
}

// ЗАДАНИЕ ДЕКОДЕР
console.log("ДЕКОДЕР");
var abc1 = "abcdefghijklmnopqrstuvwxyz";
var abc2 = "etaoinshrdlucmfwypvbgkjqxz";

var cipher = new SubstitutionCipher(abc1, abc2);
console.log(cipher.encode("abc")); // => "eta"
console.log(cipher.decode("eta")); // => "abc"

console.log(cipher.encode("xyz")); // => "qxz"
console.log(cipher.decode("qxz")); // => "xyz"

console.log(cipher.encode("aeiou")); // => "eirfg"
console.log(cipher.decode("eirfg")); // => "aeiou"
