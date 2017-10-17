"use strict";

function convertString(source){
    let result = "";
    [...source.toLowerCase()].forEach(c => {
        if(source.includes(c, source.indexOf(c) + 1)){
            result += ")";
        }else{
            result += "(";
        }
    });
    console.log(source, " => ", result);
}

convertString("din");
convertString("recede");
convertString("Success");
convertString("(( @");
