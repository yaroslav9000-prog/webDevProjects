export const towerBuilder = (nFloors: number): string[] => {
    const pyramidArray: string[] = [];
    const pyramidWidth = nFloors + (nFloors - 1);
    for(let index = 1; index <= nFloors; index++){
        let newLine: string = '';
        let blankSpaces = Math.floor(nFloors - (index + (index - 1)) /2);
        let starAmount = (index + (index - 1));
        for(let counter = 0; counter <blankSpaces; counter ++){
            newLine += " ";
        }
        for(let i = 0; i < starAmount; i++){
            newLine += "*";
        }
        for(let p = 0; p < blankSpaces; p++){
            newLine += " ";
        }
        pyramidArray.push(newLine);
    }
    return pyramidArray;
  }
  console.log(towerBuilder(7));