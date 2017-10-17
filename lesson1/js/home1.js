"use strict";

function parseAmount(strAmount){
    if(strAmount == null){
        return NaN;
    }
    return parseFloat(strAmount.replace(",", ".")) * 100;
}

function runParseAmount(amount){
    let parsed = parseAmount(amount)
    console.log("input: '%s' \tvalue: %d(%s)", amount, parsed, typeof(parsed));
}

runParseAmount('10'); // -> 1000
runParseAmount('10,5'); // -> 1050
runParseAmount('10,55'); // -> 1055
runParseAmount('d55');
runParseAmount('');
