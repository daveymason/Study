//Given a year, return the century it is in
function centuryFromYear(year) {
    if (year % 100 == 0){
       return result = year/100;
    }else {
       return result = Math.floor(year/100+1); 
    }
    console.log(result);
}