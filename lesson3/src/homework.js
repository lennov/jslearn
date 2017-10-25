import SubstitutionCipher from "./SubstitutionCipher"
import { one, two, three, four, five, six, seven, eight, nine, zero, times, plus, minus, dividedBy } from "./StrangeCalc"
import makeBuffer from "./StringBuffer"
import sum from "./Sum"

export default function homework(){
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


    // ФУНКЦИЯ
    console.log(seven(times(five()))); // must return 35
    console.log(four(plus(nine()))); // must return 13
    console.log(eight(minus(three()))); // must return 5
    console.log(six(dividedBy(two()))); // must return 3

    /// СТРОКОВЫЙ БУФФЕР
    var buffer = makeBuffer();

    buffer('Замыкания');
    buffer(' Использовать');
    buffer(' Нужно!');

    console.log(buffer());
    buffer.clear();
    console.log(buffer());

    ///Sum
    console.log(sum(2)(4)(5)(6)());
}
