
export function bmi(weight?: number, height?: number): number{
     if(!weight || !height){
         throw "Not enough parameters passed"
     }
     return Number((( weight / (height * height)) * 10000).toFixed(1));
}