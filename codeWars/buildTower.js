"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.towerBuilder = void 0;
var towerBuilder = function (nFloors) {
    var pyramidArray = [];
    var pyramidWidth = nFloors + (nFloors - 1);
    for (var index = 1; index <= nFloors; index++) {
        var newLine = '';
        var blankSpaces = Math.floor(nFloors - (index + (index - 1)) / 2);
        var starAmount = (index + (index - 1));
        for (var counter = 0; counter < blankSpaces; counter++) {
            newLine += " ";
        }
        for (var i = 0; i < starAmount; i++) {
            newLine += "*";
        }
        for (var p = 0; p < blankSpaces; p++) {
            newLine += " ";
        }
        pyramidArray.push(newLine);
    }
    return pyramidArray;
};
exports.towerBuilder = towerBuilder;
console.log((0, exports.towerBuilder)(7));
