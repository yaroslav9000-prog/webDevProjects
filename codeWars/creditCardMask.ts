export function maskify(cc: string): string{
    let stringArray = cc.split(""); 
     let reverseArray = stringArray.map((item, index, stringArray)=>(
          stringArray[stringArray.length -1 -index]
     ))
     for(let index = 0; index < reverseArray.length; index++){
          if(index > 3){
               reverseArray[index] = "#";
          }
     }
    
    return reverseArray.reverse().join("");
}
/* 
Usually when you buy something, you're asked whether your credit card number, 
phone number or answer to your most secret question is still correct. However,
 since someone could look over your shoulder, you don't want that shown on your screen. 
 Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

Examples (input --> output):
"4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""

// "What was the name of your first pet?"
"Skippy" --> "##ippy"
"Nananananananananananananananana Batman!" --> "#########
*/


console.log(maskify("4556364607935616"));
console.log(maskify("Nananananananananananananananana Batman!"));
console.log(maskify("Skippy"));
console.log(maskify("1"));