"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wave = void 0;
function wave(str) {
    // Good luck
    var numberOfLetter = str.length;
    //Create an array that returns each character of a word in upper case.
    //{"Hello", "hEllo", "heLlo", "helLo", "hellO"}
    var newArray = new Array(numberOfLetter);
    for (var index = 0; index < numberOfLetter; index++) {
        newArray[index] = (str.replace(str[index], str[index].toUpperCase()));
    }
    return newArray;
}
exports.wave = wave;
console.log(wave("hello"));
console.log(wave("codewars"));
/* Should return: 'Hello,hEllo,heLlo,helLo,hellO':
expected [ 'Hello', 'hEllo', 'heLlo', 'heLlo', 'hellO' ] to deeply equal
[ 'Hello', 'hEllo', 'heLlo', 'helLo', 'hellO' ]*/ 
