/*
The snail climbs up 7 feet each day and slips back 2 feet each night.
How many days will it take the snail to get out of a well with the given depth?
*/

function main() {
    var depth = parseInt(readLine(), 10);
    //your code goes here
    
   days = 0;
   
    for (; depth > 0;) {
        days++;
       
        depth -= 7
        if (depth > 0) {
            depth += 2
        }
    }
    console.log(days);
}