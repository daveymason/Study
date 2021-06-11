//Basic Function
function sayHello () {
    console.log('Hi there!');
  }

//Developer object
const developer = {
    name: 'Andrew'
  };

//Add the function to the object
developer.sayHello = function () {
    console.log('Hi there!');
  };

//Object is now
const developer = {
    name: 'Andrew',
    sayHello: function () {
      console.log('Hi there!');
    }
  }

//Calling the method
developer.sayHello();
// 'Hi there!'

developer['sayHello']();
// 'Hi there!'

//Passing arguments into methods
const developer = {
    name: 'Andrew',
    sayHello: function () {
      console.log('Hi there!');
    },
    favoriteLanguage: function (language) {
      console.log(`My favorite programming language is ${language}`);
    }
  };
  
  
  developer.favoriteLanguage('JavaScript');
  // My favorite programming language is JavaScript'

  