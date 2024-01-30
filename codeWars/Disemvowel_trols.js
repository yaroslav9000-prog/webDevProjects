const someString = "What are you, a communist?";

function disemVowel(str){
    const vowels = 'aAeEiIoOuUyY';
    let newStr = '';
    for(let index = 0; index < str.length; index++){
        let char = str[index];
        if(vowels.indexOf(char) === -1){
            newStr += char;
        }
    }
    return newStr
}
console.log(disemVowel(someString));