/* 
Your goal in this kata is to implement a difference function, which subtracts one list 
from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/
// [1,2,2], [1]), [2,2]
// function removeDuplicates(a, b){
//     result = [];
//     for(let index = 0; index < a.length; index++){
//         let i = 0;
//         for(let counter = 0; counter < b.length; counter++){
//             if(b[counter] == a[index]){
//                 i++;
//             }
//         }
//         if(i == 0){
//             result.push(a[index]);
//         }
//     }
//     return result;
// }
function array_dif(a, b){
    return a.filter((el)=>{
       return b.indexOf(el) ===-1;
    })
}
console.log(array_dif([1,2,2,2,3],[2]));