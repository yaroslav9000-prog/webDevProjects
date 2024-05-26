export function wave(str: string): Array<string>{
    // Good luck
    const numberOfLetter : number = str.length;
    //Create an array that returns each character of a word in upper case.
    //{"Hello", "hEllo", "heLlo", "helLo", "hellO"}

    const lettersArray = str.split('');
    // let newArray = new Array(numberOfLetter);
    // for(let index = 0; index < numberOfLetter; index++){
    //     if(newArray[index] == " "){
    //         continue;
    //     }
    //     newArray[index] = (str.replace(str[index], str[index].toUpperCase()));
        
    // }
    return lettersArray;
  }
  console.log(wave("hello"));
  console.log(wave("codewars"));
  console.log(wave("hjhbmb jlhjlkjj"));
 /* Should return: 'Hello,hEllo,heLlo,helLo,hellO': 
 expected [ 'Hello', 'hEllo', 'heLlo', 'heLlo', 'hellO' ] to deeply equal 
 [ 'Hello', 'hEllo', 'heLlo', 'helLo', 'hellO' ]*/