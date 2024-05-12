"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.comp = void 0;
/*
DESCRIPTION:
Given two arrays a and b write a function comp(a, b) (orcompSame(a, b))
that checks whether the two arrays have the "same" elements,
with the same multiplicities (the multiplicity of a member is the number of times it appears).
 "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

Examples
Valid arrays
a = [121, 144, 19, 161, 19, 144, 19, 11]
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121,
 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on.
 It gets obvious if we write b's elements in terms of squares:

a = [121, 144, 19, 161, 19, 144, 19, 11]
b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
Invalid arrays
If, for example, we change the first number to something else, comp is not returning true anymore:

a = [121, 144, 19, 161, 19, 144, 19, 11]
b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a,b) returns false because in b 132 is not the square of any number of a.

a = [121, 144, 19, 161, 19, 144, 19, 11]
b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
comp(a,b) returns false because in b 36100 is not the square of any number of a.

Remarks
a or b might be [] or {} (all languages except R, Shell).
a or b might be nil or null or None or nothing (except in C++, COBOL, Crystal,
D, Dart, Elixir, Fortran, F#, Haskell, Nim, OCaml, Pascal, Perl, PowerShell,
Prolog, PureScript, R, Racket, Rust, Shell, Swift).
If a or b are nil (or null or None, depending on the language),
the problem doesn't make sense so return false.
*/
function comp(a, b) {
    if (a == null || b == null) {
        return false;
    }
    var newA = __spreadArray([], a.sort(function (c, d) { return c - d; }), true);
    var newB = __spreadArray([], b.sort(function (c, d) { return c - d; }), true);
    for (var index = 0; index < newA.length; index++) {
        if (newA[index] !== Math.sqrt(newB[index])) {
            return false;
        }
    }
    return (newA.length, newB.length);
}
exports.comp = comp;
var a = [121, 144, 19, 161, 19, 144, 19, 11];
var b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];
console.log(comp(a, b));
a = [2, 2, 3];
b = [4, 9, 9];
console.log(comp(a, b));
a = [55, 87, 23, 12, 94, 79, 57, 18, 35, 74, 41, 28, 12, 61, 67, 13, 45];
b = [3025, 7569, 529, 144, 8836, 6241, 3249, 324, 1225, 5476, 1681, 784, 144, 3721, 4489, 169, 2025];
console.log(a.sort(function (c, d) { return c - d; }), b.sort(function (c, d) { return c - d; }));
