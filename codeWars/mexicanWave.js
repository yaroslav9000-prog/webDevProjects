"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wave = void 0;
function wave(str) {
    // Good luck
    var numberOfLetter = str.length;
    //Create an array that returns each character of a word in upper case.
    //{"Hello", "hEllo", "heLlo", "helLo", "hellO"}
    var lettersArray = str.split('');
    // let newArray = new Array(numberOfLetter);
    // for(let index = 0; index < numberOfLetter; index++){
    //     if(newArray[index] == " "){
    //         continue;
    //     }
    //     newArray[index] = (str.replace(str[index], str[index].toUpperCase()));
    // }
    return lettersArray;
}
exports.wave = wave;
console.log(wave("hello"));
console.log(wave("codewars"));
console.log(wave("hjhbmb jlhjlkjj"));
/* Should return: 'Hello,hEllo,heLlo,helLo,hellO':
expected [ 'Hello', 'hEllo', 'heLlo', 'heLlo', 'hellO' ] to deeply equal
[ 'Hello', 'hEllo', 'heLlo', 'helLo', 'hellO' ]*/ 
