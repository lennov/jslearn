use strict;

// let x = +prompt("1 аргумент");
// let y = +prompt("2 аргумент");
// let sign = prompt("Операция");

function calculator(x, y, sign){
    switch (sign) {
        case '-':
            alert(x - y);
            break;
        case '*':
            alert(x * y);
            break;
        case '/':
            alert(x / y);
            break;
        case '+':
            alert(x + y);
            break;
        default:
          console.log("Нет такой операции!");
    }
}

// calculator(x, y, sign);


let str = "Ослик иа-иа смотрел на виадук и пиалу";
let substring = "иа";

function search(str,  substring){

    let lastIndex = str.indexOf(substring);
    while(lastIndex != -1){
        console.log(lastIndex++);
        lastIndex = str.indexOf(substring, lastIndex);
    }
    console.log("done");
}

search(str, substring);
