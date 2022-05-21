
export function bmi(weight?: number, height?: number){
     if(!weight || !height){
         return null;
     }
     return( weight / (height * height)) * 10000;
}