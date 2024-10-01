"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scramble = void 0;
/**
 Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

Notes:

Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered.
Examples
scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False
 */
function scramble(str1, str2) {
    var amountOfletters = 0;
    var str1Array = str1.split("");
    var str2Array = str2.split("");
    for (var index = 0; index < str2.length; index++) {
        // if(str1Array.includes(str2Array[index])){
        //     const theLetter = str2Array[index];
        //     let myIndex = 0;
        //     for(let i =0; i < str1Array.length; i++){
        //         if(str1Array[i] == theLetter){
        //             str1Array[i] = "*";
        //             amountOfletters ++;
        //             break;
        //         }
        //     }
        // }
        var indexOfLetter = str1Array.indexOf(str2[index]);
        if (indexOfLetter != -1) {
            str1Array[indexOfLetter] = "*";
            amountOfletters++;
        }
    }
    return amountOfletters === str2.length;
}
exports.scramble = scramble;
console.log(scramble("rkqodlw", "world")); // true
console.log(scramble("cedewaraaossoqqyt", "codewars")); // true
console.log(scramble("katas", "steak")); // false
console.log(scramble('javscripts', 'javascript')); //false
console.log(scramble('scriptsjava', 'javascript')); // true
console.log(scramble('jscripts', 'javascript')); // false
console.log(scramble('aabbcamaomsccdd', 'commas')); // true
console.log(scramble('sammoc', 'commas')); // false
