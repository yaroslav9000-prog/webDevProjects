export function nbYear(p0: number, percent: number, aug: number, p: number): number{
    // population at start is 1000 people
    // growth percent for a year is 2%
    //newComers each year is 50 people.
    //percent attribute is positive and whole number i need to convert it to float.
    let ratio = percent/ 100 + 1;
    let startPop = p0;
    let newComers = aug;
    let years = 0;
    while(startPop <= p){
        startPop = startPop *ratio + newComers;
        years++;
    }
    return years;
}