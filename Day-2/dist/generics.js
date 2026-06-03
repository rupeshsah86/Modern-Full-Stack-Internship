"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function generic(value) {
    console.log(value);
    return value;
}
generic("Hello World");
const num = generic(10);
console.log(num);
function getArrElem(arr) {
    return arr[0];
}
const output = getArrElem([1, 2, 3, 4, 5]);
console.log("0th elem");
//# sourceMappingURL=generics.js.map