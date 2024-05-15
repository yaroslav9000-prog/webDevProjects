export function isTriangle(a: number, b: number, c: number): boolean {
    if(0 > a || 0 > b || 0 > c){
        return false;
    }
    if(a + b > c && b + c > a && a + c > b){
        return true;
    }
    
    return false;
  }