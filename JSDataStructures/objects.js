//Add Key-Value Pairs to JavaScript Objects
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28
  };
  
  foods["bananas"] = 13;
  foods["grapes"] = 35;
  foods["strawberries"] = 27;
  
  console.log(foods);


  //Modify an object within an object
  let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
      totalUsers: 51,
      online: 42
    }
  };
  //Change online object to 45
  userActivity.data.online = 45;
  
  console.log(userActivity);
  
  
  //Access Property Names with Bracket Notation
  let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };

  function checkInventory(scannedItem) {
     return foods[scannedItem];
  }
  
  console.log(checkInventory("apples"));


  //use the delete keyword to remove properties
  let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  
    delete foods.oranges;
    delete foods.strawberries;
    delete foods.plums;
  
  console.log(foods);

// Returns true only if the users object contains all four names, Alan, Jeff, Sarah, and Ryan, as keys, and false otherwise
  let users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function isEveryoneHere(obj) {
 
    if (
      obj.hasOwnProperty("Alan") &&
      obj.hasOwnProperty("Jeff") &&
      obj.hasOwnProperty("Sarah") &&
      obj.hasOwnProperty("Ryan")
    ) {
      return true;
    }
    return false;
  }

  console.log(isEveryoneHere(users));


  //Iterate Through the Keys of an Object with a for...in Statement
  function countOnline(usersObj) {
    let result = 0;
    for (let user in usersObj) { //cycle through the object using  for...in statement
      if (usersObj[user].online === true) { //check if each user is online
        result++; //returns 1 if the user is online
      }
    }
    return result;
  }


  //Generate an Array of All Object Keys with Object.keys()
  let users = {
    Alan: {
      age: 27,
      online: false
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: false
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function getArrayOfUsers(obj) {
    return Object.keys(users)
  }
  
  console.log(getArrayOfUsers(users));