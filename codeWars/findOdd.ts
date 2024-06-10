/*
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

FUNDAMENTALS
*/

export const findOdd = (xs: number[]):number =>{
    
    const counterObject: any= {};
    let theAnswer: number = 0;
    xs.forEach((element)=>{
        if(counterObject[element]){
            counterObject[element] += 1;
        }else{
            counterObject[element] = 1;
        }
    })

    for(let element in counterObject){
        if(counterObject[element] % 2 !=0){
            theAnswer = parseInt(element);
        }
    }
    return theAnswer;
}

console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]));
console.log(findOdd([1,1,6,6,6,6,-1,-1,9,9,9]));