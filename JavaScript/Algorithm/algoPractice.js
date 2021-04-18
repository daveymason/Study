//Given a year, return the century it is in
function centuryFromYear(year) {
    if (year % 100 == 0){
       return result = year/100;
    }else {
       return result = Math.floor(year/100+1); 
    }
    console.log(result);
}

//Convert Celsius to Fahrenheit
function convertToF(celsius) {
   let fahrenheit = celsius * (9/5) + 32;
   return fahrenheit;
 }
 
 convertToF(30);