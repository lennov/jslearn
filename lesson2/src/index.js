import parseAmount from "./parseAmount"
import convertString from "./convertString"
import convertOperations from "./convertOperations.js"
import {
    operations
} from '../test/convertOperations.res'

console.log(parseAmount("123,45"));
console.log(convertString("Recede"))
console.log(convertOperations(operations));
