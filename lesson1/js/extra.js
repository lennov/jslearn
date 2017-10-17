"use strict";

sevenAte9('79712312');// => '7712312'
sevenAte9('79797');// => '777'

function sevenAte9(source){
    let result = source;
    while(result.indexOf("797") != -1){
        result = result.replace("797", "77");
    }
    console.log(source, " => ", result);
}


DNAStrand ("ATTGC") // => "TAACG"
DNAStrand ("GTAT") // => "CATA"

function DNAStrand(source){
    let result = [...source].map(function(nucleotide){
        switch (nucleotide) {
            case "A":
                return "T";
            case "T":
                return "A";
            case "C":
                return "G";
            case "G":
                return "C";
        }
    });
    console.log(source, " => ", result.join(""));
}
