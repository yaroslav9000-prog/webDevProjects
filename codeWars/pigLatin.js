"use strict";
/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word.
Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
REGULAR EXPRESSIONSALGORITHMS
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.pigIt = void 0;
var pigIt = function (a) {
    // code away
    var checkArray = a.split(" ");
    var myRegex = new RegExp(/^[a-zA-Z]|[a-zA-Z]$/);
    var procArray = checkArray.map(function (item) {
        if (myRegex.test(item)) {
            var firstLetter = item[0];
            var newWord = "";
            for (var index = 1; index < item.length; index++) {
                newWord += item[index];
            }
            newWord += firstLetter;
            newWord += "ay";
            return newWord;
        }
        else {
            return item;
        }
        // console.log(myRegex.test(item));
    });
    var finalString = "";
    for (var index = 0; index < procArray.length; index++) {
        if (index == procArray.length - 1) {
            finalString += "".concat(procArray[index]);
            break;
        }
        finalString += "".concat(procArray[index], " ");
    }
    return finalString;
};
exports.pigIt = pigIt;
console.log((0, exports.pigIt)('Hello world !'));
console.log((0, exports.pigIt)("Pig latin is cool"));
console.log((0, exports.pigIt)("is"));
