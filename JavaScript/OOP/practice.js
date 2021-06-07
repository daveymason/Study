/*
 * Create an object named `breakfast`. 
 * The object should contain properties for the `name`, `price`, and `ingredients`.
 * Print the entire object on the console
 */
let breakfast = {
    name: "The Lumberjack",
    price: 9.95,
    ingredients: ["eggs", "sausage", "toast", "hashbrowns", "pancakes"]

};

console.log(breakfast);

/* 
Create an object called facebookProfile. 
The object should have 3 properties:
-your name
-the number of friends you have, and
-an array of messages you've posted (as strings)

The object should also have 4 methods:
-postMessage(message) - adds a new message string to the array
-deleteMessage(index) - removes the message corresponding to the index provided
-addFriend() - increases the friend count by 1
-removeFriend() - decreases the friend count by 1
 */


// your code goes here
var facebookProfile = {
    name: "Adman",
    friends: 957,
    messages: ["Gattin?", "Craic?", "Ok"],
    postMessage: function (message){
        facebookProfile.messages.push(message);
    },
    deleteMessage: function deleteMessage(index){
        facebookProfile.messages.splice(index, 1);
    },
    addFriend: function(){
        facebookProfile.friends++;
    },
    removeFriend: function(){
        if(facebookProfile.friends > 0){
            facebookProfile.friends--;
        }
    }
}

/*
 * QUIZ REQUIREMENTS
 * - Your code should have an array named `donuts`
 * - Your `donuts` array should call the `forEach()` method
 * - Your `forEach()` loop should output the donut summaries
 * - BE CAREFUL ABOUT THE PUNCTUATION, SPACES, AND EXACT WORDS TO BE PRINTED.
 */

var donuts = [
    { type: "Jelly", cost: 1.22 },
    { type: "Chocolate", cost: 2.45 },
    { type: "Cider", cost: 1.59 },
    { type: "Boston Cream", cost: 5.99 }
];

donuts.forEach(function(donut){
   console.log(`${donut.type} donuts cost $${donut.cost} each`); 
});