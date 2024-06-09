"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ipToInt32 = void 0;
/*
Take the following IPv4 address: 128.32.10.1.
This address has 4 octets where each octet is a single byte (or 8 bits).

1st octet 128 has the binary representation: 10000000
2nd octet 32 has the binary representation: 00100000
3rd octet 10 has the binary representation: 00001010
4th octet 1 has the binary representation: 00000001
So 128.32.10.1 == 10000000.00100000.00001010.00000001
160000000 1600000 + 16160  + 16
Because the above IP address has 32 bits, we can represent it as the 32 bit number: 2149583361.

Write a function ip_to_int32(ip) ( JS: ipToInt32(ip) )
 that takes an IPv4 address and returns a 32 bit number.

Example
"128.32.10.1" => 2149583361

*/
function ipToInt32(ip) {
    var arrayNumbers = ip.split(".").map(function (item) { return +item; });
    var myConv = [24, 16, 8, 0];
    var finalArray = [];
    for (var i = 0; i < arrayNumbers.length; i++) {
        var numberOne = (arrayNumbers[i] << myConv[i]);
        finalArray.push(numberOne < 0 ? numberOne *= -1 : numberOne);
    }
    return finalArray.reduce(function (firstVal, secVal) { return firstVal + secVal; });
}
exports.ipToInt32 = ipToInt32;
console.log(ipToInt32("128.32.10.1"));
console.log(ipToInt32("255.255.255.255"));
