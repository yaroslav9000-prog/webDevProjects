/* 
Write a function, which takes a non-negative integer (seconds)
 as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.

DATE TIMEMATHEMATICSALGORITHMS
*/
function humanReadable (seconds) {
    const hours = 60 * 60;
    const minutes = 60;
    let hoursTime = 0;
    let minutesTime = 0;
    //59 90 3600 45296 86399
    if(seconds / hours > 0){
        hoursTime = seconds / hours;
        seconds = seconds % hours;
    }
    if(seconds / minutes > 0){
        minutesTime = seconds / minutes;
        seconds = seconds % minutes;
    }
    hoursTime = Math.floor(hoursTime);
    minutesTime = Math.floor(minutesTime);
    if(hoursTime < 10){
        hoursTime = `0` + hoursTime;
    }
    if(minutesTime < 10){
        minutesTime = '0' + minutesTime;
    }
    if(seconds < 10){
        seconds = '0' + seconds;
    }
    return `${hoursTime}:${minutesTime}:${seconds}`;
}
  console.log(humanReadable(86399));
  console.log(parseInt(3600, 2));
/* 
describe('tests', function() {

  const { strictEqual } = require("chai").assert;

  function doTest(seconds, expected) {
    const actual = humanReadable(seconds);
    strictEqual(actual, expected, `for ${seconds} seconds\n`);
  }

  it('sample tests', function() {
    doTest(     0, '00:00:00');
    doTest(    59, '00:00:59');
    doTest(    60, '00:01:00');
    doTest(    90, '00:01:30');
    doTest(  3599, '00:59:59');
    doTest(  3600, '01:00:00');
    doTest( 45296, '12:34:56');
    doTest( 86399, '23:59:59');
    doTest( 86400, '24:00:00');
    doTest(359999, '99:59:59');
  });
});
*/