"use strict";
/*
Everyone knows passphrases. One can choose passphrases from poems, songs,
movies names and so on but frequently they can be guessed due to common cultural references.
 You can get your passphrases stronger by different means. One is the following:

choose a text in capital letters including or not digits and non alphabetic characters,

1. shift each letter by a given number but the transformed letter must be a letter (circular shift),
2. replace each digit by its complement to 9,
3. keep such as non alphabetic and non digit characters,
4. downcase each letter in odd position, upcase each letter in even position
(the first character is in position 0),
5. reverse the whole result.
Example:
your text: "BORN IN 2015!", shift 1

1 + 2 + 3 -> "CPSO JO 7984!"

4 "CpSo jO 7984!"

5 "!4897 Oj oSpC"

With longer passphrases it's better to have a small and easy program. Would you write it?
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.playPass = void 0;
function playPass(s, n) {
    //Unicode for upperCase abc is from 65-A 90-Z
    //unicode for 97-a 122-z
    var splitString = s.split("");
    var NanArray = [];
    // i need to save all whitespaces and not convert numbers to unicode
    for (var index = 0; index < splitString.length; index++) {
        var myIndex = splitString[index];
        if (myIndex.charCodeAt(0) >= 65 && myIndex.charCodeAt(0) <= 90) {
            if (myIndex.charCodeAt(0) + n > 90) {
                var theDiff = myIndex.charCodeAt(0) + n - 90;
                NanArray.push(String.fromCharCode(65 + theDiff));
            }
            else {
                NanArray.push(String.fromCharCode(myIndex.charCodeAt(0) + n));
            }
        }
        if (myIndex.charCodeAt(0) >= 97 && myIndex.charCodeAt(0) <= 122) {
            if (myIndex.charCodeAt(0) + n > 122) {
                var theDiff = myIndex.charCodeAt(0) + n - 122;
                NanArray.push(String.fromCharCode(97 + theDiff));
            }
            else {
                NanArray.push(String.fromCharCode(myIndex.charCodeAt(0) + n));
            }
        }
        if (/\d/.test(myIndex)) {
            NanArray.push(String(9 - parseInt(myIndex)));
        }
        else {
            NanArray.push(myIndex);
        }
    }
    for (var counter = 0; counter < NanArray.length; counter++) {
        var oddCheck = counter + 1;
        if (oddCheck % 2 == 0) {
            NanArray[counter] = NanArray[counter].toLowerCase();
        }
        else {
            NanArray[counter] = NanArray[counter].toUpperCase();
        }
    }
    return NanArray.reverse().join("");
}
exports.playPass = playPass;
console.log(playPass("It's forbidden to smoke in this park, 404", 10));
