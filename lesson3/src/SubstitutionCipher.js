export default function SubstitutionCipher(abc1, abc2) {

    this.abc1 = abc1;
    this.abc2 = abc2;

    this.encode = function(text){
        return encodeDecode(abc1, abc2, text).join("");
    };

    this.decode = function(text){
        return encodeDecode(abc2, abc1, text).join("");
    };

    function encodeDecode(dic1, dic2, text){
      return [...text]
        .map(c => dic2[dic1.indexOf(c)]);
    }
}
