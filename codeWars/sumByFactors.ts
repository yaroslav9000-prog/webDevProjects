/* 
Given an array of positive or negative integers

 I= [i1,..,in]

you have to produce a sorted array P of the form

[ [p, sum of all ij of I for which p is a prime factor (p positive) of ij] ...]

P will be sorted by increasing order of the prime numbers. 
The final result has to be given as a string in Java, C#, C, C++ 
and as an array of arrays in other languages.

Example:
I = [12, 15]; //result = [[2, 12], [3, 27], [5, 15]]
[2, 3, 5] is the list of all prime factors of the elements of I, hence the result.

Notes:

It can happen that a sum is 0 if some numbers are negative!
Example: I = [15, 30, -45] 5 divides 15, 30 and (-45) so 5 appears in the result,
 the sum of the numbers for which 5 is a factor is 0 so we have [5, 0] in the result amongst others.

In Fortran - as in any other language - the returned string is not permitted to contain any
 redundant trailing whitespace: you can use dynamically allocated character strings.
*/
export function sumOfDivided(lst: number[]): number[] {
    // your code
    let listWithSum = [...lst, lst.reduce((accumulator, currentValue)=>(accumulator+ currentValue))];
    let maxRoot = Math.floor(Math.sqrt(listWithSum[listWithSum.length -1]));
    let arrayOfNumber: number[] = [];
    let arrayOfPrimes: number[] =[2, 3];
    for(let index = 4; index <= maxRoot; index++){
        arrayOfNumber.push(index);
    }
    for(let index = 0; index < arrayOfNumber.length; index++){
        let value = 0
        for(let i = 2; i <= maxRoot; i++){
            if(arrayOfNumber[index] % i ==0){
                continue;
            }else{arrayOfPrimes.push(arrayOfNumber[index])}
        }
        
    }
    // const newList = listWithSum.map((item: number, index: number)=>
    //     {   if(item < 0){
    //             item *= -1;
    //         }
            
    //         let myFlag = index + 2;
    //         let result !: number;
    //         while(myFlag < currRoot + 1){
    //             if(item % myFlag === 0){
    //                 result = myFlag;
    //                 break;
    //             }else{
    //                 myFlag ++;
    //             }
    //         }
    //         myFlag++
    //         return [result, item];
    //     })
    // return newList.sort((a, b)=> a[0] - b[0]);
    return arrayOfPrimes;
  }

  console.log(sumOfDivided([12, 15]));