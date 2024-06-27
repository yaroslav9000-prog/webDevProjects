/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. 
Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
REGULAR EXPRESSIONSALGORITHMS 
*/

export const pigIt = (a : string) : any =>  {
    // code away
    const checkArray = a.split(" ");
    const myRegex = new RegExp(/^[a-zA-Z]|[a-zA-Z]$/);
    const procArray = checkArray.map(item=>{
        if(myRegex.test(item)){
            const firstLetter = item[0];
            let newWord: string = "";
            for(let index = 1; index < item.length; index++){
                newWord += item[index];
            }
            newWord += firstLetter;
            newWord += "ay";
            return newWord;
        }else{
            return item;
        }
        // console.log(myRegex.test(item));
    });
    let finalString:string = "";
    for(let index=0; index< procArray.length; index++){
        if(index == procArray.length -1){
            finalString += `${procArray[index]}`;
            break;
        }       
        finalString += `${procArray[index]} `;
    }

    return finalString ;
    
  }

  console.log(pigIt('Hello world !'));
  console.log(pigIt("Pig latin is cool"));
  console.log(pigIt("is"));
  