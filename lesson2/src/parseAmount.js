export default function parseAmount(strAmount){
    if(strAmount == null){
        return NaN;
    }
    return parseFloat(replaceComma(strAmount)) * 100;
}

export function replaceComma(source){
    return source.replace(",", ".");
}
