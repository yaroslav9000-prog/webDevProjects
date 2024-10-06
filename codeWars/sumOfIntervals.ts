export function sumOfIntervals(intervals: [number, number][]):void {
    //first i enter a for loop fixate on first interval check if there are intervals that start and end inside 
    //Current interval or start before current interval and end inside or start inside current interval and end 
    //outside
   const checkForOverlaps =(annArray : [number, number][]): [number, number][]=>{

   
   const noOverlap: [number, number][] = []
    for(let index = 0; index < intervals.length; index++){
        const currentInterval = intervals[index];
        for(let i = 1; i < intervals.length; i++){
            if(intervals[i][0] > currentInterval[0] && intervals[i][1] < currentInterval[1]){
                noOverlap.push(currentInterval)
            }else if(intervals[i][0] < currentInterval[0] && (intervals[i][1] >= currentInterval[0] && intervals[i][1]<= currentInterval[1])){
                noOverlap.push([intervals[i][0], currentInterval[1]]);
            }else if(intervals[i][0] <= currentInterval[0] && intervals[i][1] >= currentInterval[1]){
                noOverlap.push(intervals[i]);
            }
        }
        noOverlap.push(currentInterval);
    }
    return noOverlap;
}
    console.log(checkForOverlaps(intervals));
  }

  //Examples
  sumOfIntervals( [
   [1, 2],
   [6, 10],
   [11, 15]
] ) 

sumOfIntervals( [
   [1, 4],
   [7, 10],
   [3, 5]
] )

sumOfIntervals( [
   [1, 5],
   [10, 20],
   [1, 6],
   [16, 19],
   [5, 11]
] )

sumOfIntervals( [
   [0, 20],
   [-100000000, 10],
   [30, 40]
] )
