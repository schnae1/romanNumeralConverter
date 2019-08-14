function convertToRoman(num) {

 let ones = 0;
 let tens = 0;
 let hundreds = 0;
 let thousands = 0;

 let romanNum = [];
 let res = num;

 // Thousands
 if(res >= 1000){

   thousands = Math.floor(res / 1000);
   res %= 1000;
   
   for(let i = 0; i < thousands; i++){
     romanNum.push("M");
   }

 }
 // Hundreds
 if(res >= 100){
   hundreds = Math.floor(res / 100);
   res %= 100;

   if(hundreds <= 3){
     for(let j = 0; j < hundreds; j++){
       romanNum.push("C");
     }
   }

   if(hundreds == 4)
    romanNum.push("CD");

   if(hundreds >= 5 && hundreds != 9)
    romanNum.push("D");

   if(hundreds >= 6 && hundreds != 9){
     for(let i = 0; i < hundreds - 5; i++){
       romanNum.push("C");
     }
   }

   if(hundreds == 9)
    romanNum.push("CM")
  
 }
 // Tens
 if(res >= 10){
   tens = Math.floor(res / 10);
   res %= 10;

   if(tens <= 3){
     for(let j = 0; j < tens; j++){
       romanNum.push("X");
     }
   }

   if(tens == 4)
    romanNum.push("XL");

   if(tens >= 5 && tens != 9)
    romanNum.push("L");

   if(tens >= 6 && tens != 9){
     for(let i = 0; i < tens - 5; i++){
       romanNum.push("X");
     }
   }

   if(tens == 9)
    romanNum.push("XC")

 } 
 // Ones
 if(res < 10){
   
   ones = res

   if(ones <= 3){
     for(let j = 0; j < ones; j++){
       romanNum.push("I");
     }
     
   }

   if(ones == 4)
    romanNum.push("IV");

   if(ones >= 5 && ones != 9)
    romanNum.push("V");

   if(ones >= 6 && ones != 9){
     for(let i = 0; i < ones - 5; i++){
       romanNum.push("I");
     }
   }

   if(ones == 9)
    romanNum.push("IX")

 }


 return romanNum.join("");
}

console.log(convertToRoman(1999));

