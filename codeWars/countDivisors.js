/* 
Count the number of divisors of a positive integer n.

Random tests go up to n = 500000.

Examples (input --> output)
4 --> 3 // we have 3 divisors - 1, 2 and 4
5 --> 2 // we have 2 divisors - 1 and 5
12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30
Note you should only return a number, the count of divisors.
The numbers between parentheses are shown only for you to see 
which numbers are counted in each case.
*/
// to check what number divide the input number with a remainder we should
function getDivisorsCnt(n){
    // todo
    var numDivisors = 1;
    var factor = 2; // Candidate for prime factor of `n`

    // If `n` is not a prime number then it must have one factor
    // which is <= `sqrt(n)`, so we try these first:
    while (factor * factor <= n) {
        if (n % factor === 0) {
            // `factor` is a prime factor of `n`, determine the exponent:
            var exponent = 0;
            do {
                n /= factor;
                exponent++;
            } while (n % factor === 0)
            // `factor^exponent` is one term in the prime factorization of n,
            // this contributes as factor `exponent + 1`:
            numDivisors *= exponent + 1;
        }
        // Next possible prime factor:
        factor = factor == 2 ? 3 : factor + 2
    }

    // Now `n` is either 1 or a prime number. In the latter case,
    // it contributes a factor 2:
    if (n > 1) {
        numDivisors *= 2;
    }

    return numDivisors;
}
console.log(getDivisorsCnt(1));
console.log(getDivisorsCnt(10));
console.log(getDivisorsCnt(11));
console.log(getDivisorsCnt(54));
console.log(getDivisorsCnt(500000));
console.log(getDivisorsCnt(3721));
console.log(getDivisorsCnt(3481));