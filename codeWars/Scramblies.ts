/**
 Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

Notes:

Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered.
Examples
scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False
 */
export function scramble(str1: string, str2: string): boolean {
    // let amountOfletters = 0;
    // const str1Array = str1.split("");
    // const str2Length = str2.length;
    // for(let index=0; index < str2Length; index++){
    //     let indexOfLetter = str1.indexOf(str2[index]);
    //     if(indexOfLetter != -1){
    //         str1Array[indexOfLetter] = "*";
    //         amountOfletters++;
    //     }     
    // }
    // return amountOfletters === str2Length;
    const letterObj = {};
    for(const char of str1){
        if(letterObj[char] == undefined){
            letterObj[char] = 1
        }else{letterObj[char]++}
    }

    for(const char of str2){
        if(letterObj[char] == undefined){
            return false;
        }
        letterObj[char] --;
        if(letterObj[char] == -1){
            return false;
        }
    }
    return true;
  }

//   console.log(scramble("rkqodlw", "world"));// true
//   console.log(scramble("cedewaraaossoqqyt", "codewars")); // true
//   console.log(scramble("katas", "steak")); // false
//   console.log(scramble('javscripts', 'javascript')) //false
//   console.log(scramble('scriptsjava','javascript')) // true
//   console.log(scramble('jscripts','javascript')) // false
//   console.log(scramble('aabbcamaomsccdd', 'commas')) // true
//   console.log(scramble('sammoc', 'commas')) // false

  console.log(scramble('javscripts', 'javascript')) //false
  console.log(scramble('scriptsjava','javascript')) // true