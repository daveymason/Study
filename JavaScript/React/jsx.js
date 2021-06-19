// Basic JSX
const JSX = <h1>Hello JSX!</h1>;

//More complex JSX
const JSX =
<div>
  <h1>Header</h1>
  <p>Paragraph</p>
  <ul>
    <li>list item</li>
    <li>list item</li>
    <li>list item</li>
  </ul>
</div>
;

//Comments
const JSX = (
    <div>
      <h1>This is a block of JSX</h1>
      <p>Here's a subtitle</p>
      {/* Comment*/}
    </div>
  );

  //render to DOM
  const JSX = (
    <div>
      <h1>Hello World</h1>
      <p>Lets render this to the DOM</p>
    </div>
  );
  ReactDOM.render(JSX, document.getElementById("challenge-node"));

  //className
  const JSX = (
    <div className="myDiv">
      <h1>Add a class to this div</h1>
    </div>
  );

  //Conditional Rendering
  import React from 'react';
import ReactDOM from 'react-dom';

let message;

if (user.age >= drinkingAge) {
  message = (
    <h1>
      Hey, check out this alcoholic beverage!
    </h1>
  );
} else {
  message = (
    <h1>
      Hey, check out these earrings I got at Claire's!
    </h1>
  );
}

ReactDOM.render(
  message, 
  document.getElementById('app')
);

//ternary
import React from 'react';
import ReactDOM from 'react-dom';

function coinToss () {
  // Randomly return either 'heads' or 'tails'.
  return Math.random() < 0.5 ? 'heads' : 'tails';
}

const pics = {
  kitty: 'https://content.codecademy.com/courses/React/react_photo-kitty.jpg',
  doggy: 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg'
};

const img = <img src={pics[coinToss() === 'heads' ? 'kitty' : 'doggy']} />;

ReactDOM.render(
	img, 
	document.getElementById('app')
);

//Shorter Ternary
const headline = (
  <h1>
    { age >= drinkingAge ? 'Buy Drink' : 'Do Teen Stuff' }
  </h1>
);