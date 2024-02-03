([[10,0],[3,5],[5,8]]),5
([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]),17
const number = (busStops)=>{
    let totalNumber = 0;
    for(let index = 0; index < busStops.length; index++){
        totalNumber += busStops[index][0];
        totalNumber -= busStops[index][1];
    }
    return totalNumber;
}
console.log(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]));
