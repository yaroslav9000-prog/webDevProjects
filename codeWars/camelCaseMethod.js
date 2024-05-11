"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.camelCase = void 0;
function camelCase(str) {
    var myFinalPiece = "";
    if (str == "" || str == " ") {
        return "";
    }
    var myStr = str.split(" ");
    var camelCase = myStr.map(function (word) { return word[0].toUpperCase() + word.slice(1); });
    for (var index = 0; index < camelCase.length; index++) {
        myFinalPiece += camelCase[index];
    }
    return myFinalPiece; //myFinalPiece; // your code here
}
exports.camelCase = camelCase;
/*
Write a method (or function, depending on the language)
that converts a string to camelCase, that is,
all words must have their first letter capitalized and spaces must be removed.

Examples (input --> output):
"hello case" --> "HelloCase"
"camel case word" --> "CamelCaseWord"
Don't forget to rate this kata! Thanks :)
*/
// i have a sentence in which words's first letter should be capitalized
// since i have a sentence i have whitespaces between them, thats how i can split them.
console.log(camelCase(" "));
console.log(camelCase("test case"));
console.log(camelCase("camel case method"));
console.log(camelCase("say hello"));
console.log(camelCase("camel case word"));
