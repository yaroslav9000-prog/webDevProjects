// const checkIfOverlap=(firstArray: number[], secondArray: number[])=>{
//     if(firstArray[0] > secondArray[0] && (firstArray[1] > secondArray[1] && firstArray[0] < secondArray[1])){
//         return [secondArray[0], firstArray[1]];
//     } 
//     if((secondArray[0] > firstArray[0] && secondArray[0] < firstArray[1]) && (secondArray[1] > firstArray[0] && secondArray[1] < firstArray[1])){
//         return firstArray;
//     }
//     if((secondArray[0] >= firstArray[0] && secondArray[0] < firstArray[1]) && secondArray[1] > firstArray[1]){
//         return [firstArray[0], secondArray[1]];
//     }
//     if((firstArray[0] >= secondArray[0] && firstArray[0] <= secondArray[1]) && (firstArray[1] <= secondArray[1] && firstArray[1] >= secondArray[0])){
//         return [secondArray[0], secondArray[1]];
//     }else{
//         return [];
//     }
// }

function sumOfIntervals(intervals: [number, number][]) {
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
//    const newIntervals = [...intervals];
//    const newArray: any = [];
//     for(let index = 0; index <= newIntervals.length - 2; index++){
//         let firstArray = newIntervals[index];
//         for(let i= index + 1; i < newIntervals.length; i++){
//             let secondArray = newIntervals[i];
//             console.log(firstArray, secondArray, "\n---------------------");
//             const result = checkIfOverlap(firstArray, secondArray);
//             if(result.length > 0){
//                 console.log('the result is: \n', result, '\n--------------');
//                 newArray.push(result);
//             }
//         }
//     }
//     return newArray;
    const newArray:number[] = [];
    for(let index = 0; index < intervals.length; index++){
        for(let i = intervals[index][0]; i < intervals[index][1]; i++){
            newArray.push(i);
        }
    }
    const someObj:{[index: string]:any} = {};
    for(let index = 0; index < newArray.length; index++){
        if(someObj[`${newArray[index]}`] ==undefined){
            someObj[`${newArray[index]}`] = 1;
        }else{
            someObj[`${newArray[index]}`]++;
        }
    }
    let length = 0;
    for(let item in someObj){
        length++
    }
   return length;
}
// console.log(checkIfOverlap([1,2], [1,7]));
// console.log(checkIfOverlap([1,2], [6,10]))
  //Examples
//   console.log(sumOfIntervals( [
//    [1, 2],
//    [6, 10],
//    [11, 15]
// ] ) )

// console.log(sumOfIntervals( [
//    [1, 4],
//    [7, 10],
//    [3, 5]
// ] ))

console.log(sumOfIntervals( [
   [1, 5],
   [10, 20],
   [1, 6],
   [16, 19],
   [5, 11]
] ))

// console.log(sumOfIntervals( [
//    [0, 20],
//    [-100000000, 10],
//    [30, 40]
// ] ))
