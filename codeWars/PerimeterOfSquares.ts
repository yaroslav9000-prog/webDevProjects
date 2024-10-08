/*
The drawing shows 6 squares the sides of which have a length of 1, 1, 2, 3, 5, 8. It's easy to see that the sum of the perimeters of these squares is : 4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80 

Could you give the sum of the perimeters of all the squares in a rectangle when there are n + 1 squares disposed in the same manner as in the drawing:

alternative text

Hint:
See Fibonacci sequence

Ref:
http://oeis.org/A000045

The function perimeter has for parameter n where n + 1 is the number of squares (they are numbered from 0 to n) and returns the total perimeter of all the squares.

perimeter(5)  should return 80
perimeter(7)  should return 216
*/

export const perimeter = (n:number):number => {
    const buildTheArray=(fPart: number)=>{
        const firstTwo = [1, 1];
        if(fPart> 2){
        for(let index =2; index <= fPart; index++){
            firstTwo[index] = firstTwo[index -1] + firstTwo[index -2];
        }
        return firstTwo;
    }else{
        return firstTwo;
    }
    }
    
    // our code
      return buildTheArray(n).reduce((current, next)=> current+next) * 4;
    }
112358
    console.log(perimeter(3));
    console.log(perimeter(4));
    console.log(perimeter(5));
    console.log(perimeter(6));
    console.log(perimeter(1));
    console.log(perimeter(2));
    console.log(perimeter(7));