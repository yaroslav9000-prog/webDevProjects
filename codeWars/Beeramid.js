"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.beeramid = void 0;
/*
Let's pretend your company just hired your friend from college and paid you a referral bonus.
 Awesome! To celebrate, you're taking your team out to the terrible dive bar next door and
 using the referral bonus to buy, and build, the largest three-dimensional beer can pyramid you can.
  And then probably drink those beers, because let's pretend it's Friday too.

A beer can pyramid will square the number of cans in each level - 1 can in the top level, 4 in the second,
 9 in the next, 16, 25...

Complete the beeramid function to return the number of complete levels of a beer can pyramid you can make,
 given the parameters of:

your referral bonus, and

the price of a beer can

For example:

beeramid(1500, 2); // should === 12
beeramid(5000, 3); // should === 16
*/
function beeramid(bonus, price) {
    var beerCanAmount = Math.floor(bonus / price);
    var counter = 1;
    while (beerCanAmount > 0) {
        if (beerCanAmount > counter * counter) {
            beerCanAmount -= counter * counter;
        }
        else {
            break;
        }
        counter++;
    }
    return counter - 1;
}
exports.beeramid = beeramid;
console.log(beeramid(1500, 2));
console.log(beeramid(5000, 3));
console.log(beeramid(11, 2));
console.log(beeramid(21, 1.5));
console.log(beeramid(454, 5));
console.log(beeramid(455, 5));
console.log("\u05DE\u05EA\u05DF \u05E9\u05D9\u05E8\u05D5\u05EA\u05D9 \u05D9\u05D5\u05E4\u05D9 \u05D5\u05D0\u05E1\u05D8\u05D8\u05D9\u05E7\u05D4 \u05E9\u05DB\u05D5\u05DC\u05DC\u05D9\u05DD \u05D1\u05EA\u05D5\u05DB\u05DD \u05D0\u05EA \u05D4\u05D3\u05D1\u05E8\u05D9\u05DD \u05DB\u05DE\u05D5: \u05DE\u05E0\u05D9\u05E7\u05D5\u05E8, \u05E4\u05D3\u05D9\u05E7\u05D5\u05E8 , \u05D4\u05E9\u05E8\u05EA \u05E9\u05D9\u05E2\u05D5\u05E8 \u05D1\u05E4\u05E0\u05D9\u05DD.                                              \n\u05D1\u05E0\u05D9\u05D9\u05EA \u05E6\u05D9\u05E4\u05D5\u05E8\u05E0\u05D9\u05D9\u05DD \u05D5\u05EA\u05D9\u05E7\u05D5\u05DF \u05D4\u05DE\u05D1\u05E0\u05D4 \u05E9\u05DC \u05E6\u05D9\u05E4\u05D5\u05E8\u05E0\u05D9\u05D9\u05DD. \u05E7\u05D5\u05E8\u05E7\u05E6\u05D9\u05D9\u05EA \u05E9\u05D5\u05E8\u05E9, \u05D8\u05D9\u05E4\u05D5\u05DC \u05D1\u05E4\u05D8\u05E8\u05D9\u05D5\u05EA \u05DE\u05D6\u05D4\u05DE\u05D5\u05EA \u05D5\u05DB\u05DC \u05DE\u05D9\u05E0\u05D9 ".length);
