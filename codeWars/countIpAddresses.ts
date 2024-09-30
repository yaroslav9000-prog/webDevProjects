/* 
Implement a function that receives two IPv4 addresses, and returns the number of addresses between them (including the first one, excluding the last one).

All inputs will be valid IPv4 addresses in the form of strings. The last address will always be greater than the first one.
*/

export function ipsBetween(start: string, end: string): void {
    //TODO
    const firstIp = start.split(".").map(item=> parseInt(item));
    const secondIp = end.split(".").map(item=> parseInt(item));
    let diffFirst: number[] = [];
    let diffSecond: number[] = [];
    const arrayOfUnits = [256**3, 256**2, 256**1, 1];
    //i go and check if first number of lastIp is bigger than the first number of startIp
    // if so i check the difference between them store it in diffArray and then go to next pair of number in the ip addresses.
    // else its the same numbers i store 0 in diffArray and keep going on pairs.

    // for(let i = 0; i< firstIp.length; i++){
    //     if(secondIp[i] > firstIp[i]){
    //         diffSecond.push(secondIp[i] - firstIp[i]);
    //         diffFirst.push(0);
    //     }else if(secondIp[i] < (firstIp[i])){
    //         diffFirst.push(firstIp[i]);
    //         diffSecond.push(0);
    //     }else{
    //         diffFirst.push(0);
    //         diffSecond.push(0);
    //     }
    // }
    let lastSum: number = 0;
    let firstSum: number = 0;
    for(let index=0; index < 4; index++){
        lastSum += (secondIp[index] * arrayOfUnits[index]);
    }
    for(let index=0; index < 4; index++){
        firstSum += (firstIp[index] * arrayOfUnits[index]);
    }
    console.log(lastSum - firstSum);
  }
/*
ipsBetween("8.69.66.194", "186.236.2.127"): expected 2997271870 to equal 2997272509
*/
  ipsBetween("10.0.0.0", "10.0.0.50");
  ipsBetween("10.0.0.0", "10.0.1.0");
  ipsBetween("20.0.0.10", "20.0.1.0");
  ipsBetween("8.69.66.194","186.236.2.127");