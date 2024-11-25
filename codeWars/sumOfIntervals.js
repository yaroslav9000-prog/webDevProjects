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
exports.sumOfIntervals = void 0;
var checkIfOverlap = function (firstArray, secondArray) {
    var combinedArray = __spreadArray(__spreadArray([], firstArray, true), secondArray, true);
    if (combinedArray[0] > combinedArray[2] && combinedArray[1] >= combinedArray[3]) {
        return [combinedArray[2], combinedArray[1]];
    }
    else if (combinedArray[0] <= combinedArray[2] && combinedArray[1] >= combinedArray[3]) {
        return [combinedArray[0], combinedArray[1]];
    }
    else if (combinedArray[0] <= combinedArray[2] && combinedArray[3] > combinedArray[1]) {
        return [combinedArray[0], combinedArray[3]];
    }
    else if (combinedArray[0] > combinedArray[2] && combinedArray[1] < combinedArray[3]) {
        return [combinedArray[2], combinedArray[3]];
    }
    else {
        return [];
    }
};
function sumOfIntervals(intervals) {
    //first i enter a for loop fixate on first interval check if there are intervals that start and end inside 
    //Current interval or start before current interval and end inside or start inside current interval and end 
    //outside
    /*
    [1, 5],
   [10, 20],
   [1, 6],
   [16, 19],
   [5, 11]
    */
    var newArray = [];
    for (var index = 0; index < intervals.length; index++) {
        var firstArray = intervals[index];
        for (var i = 1; i < intervals.length; i++) {
            var secondArray = intervals[i];
            var result = checkIfOverlap(firstArray, secondArray);
            if (result.length > 0) {
                newArray.push(result);
            }
        }
    }
    return newArray;
}
exports.sumOfIntervals = sumOfIntervals;
//Examples
sumOfIntervals([
    [1, 2],
    [6, 10],
    [11, 15]
]);
sumOfIntervals([
    [1, 4],
    [7, 10],
    [3, 5]
]);
sumOfIntervals([
    [1, 5],
    [10, 20],
    [1, 6],
    [16, 19],
    [5, 11]
]);
sumOfIntervals([
    [0, 20],
    [-100000000, 10],
    [30, 40]
]);
