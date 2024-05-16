/*
Given a two-dimensional array of integers, 
return the flattened version of the array with all the integers in the sorted (ascending) order.

Example:

Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].
*/
export function flattenAndSort(inputArray: number[][]): number[] {
    // Good luck, brave code warrior!
    const newFlatArray: number[] = [];
    for(let index = 0; index < inputArray.length; index++){
        for(let counter = 0; counter < inputArray[index].length; counter++){
            newFlatArray.push(inputArray[index][counter]);
        }
    }
    return newFlatArray.sort((a, b)=>{ return a - b});
  }

const exampleArray = [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]];
console.log(flattenAndSort(exampleArray));