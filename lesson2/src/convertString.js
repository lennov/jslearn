"use strict";

export default function convertString(source) {
    let result = "";
    [...source.toLowerCase()].forEach(c => {
        if (source.includes(c, source.indexOf(c) + 1)) {
            result += ")";
        } else {
            result += "(";
        }
    });
    return result;
}
