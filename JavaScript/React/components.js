  //Stateless functional component
  const MyComponent = function() {
    return (
        <div className='someDiv'>
        <p>'Hello there'</p>
        </div>
    )
  }

//Another example
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
    <div>
      <h1>Hello React!</h1>
    </div>
    );
  }
};

//Parent & Child basic components
return (
  <App>
   <Navbar />
   <Dashboard />
   <Footer />
  </App>
 )

//Parent & Child Components
const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
          <ChildComponent />
      </div>
    );
  }
};

//Render example
class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
          <Fruits />
          <Vegetables />
      </div>
    );
  }
};

ReactDOM.render(<TypesOfFood />, document.getElementById('challenge-node'))

//Create own component
class MyComponent extends React.Component{
    constructor(props){
      super(props);
    }
  
    render () {
      return (
        <div id='challenge-node'>
          <h1>My First React Component!</h1>
        </div>
      )
    };
  
  }
  
  ReactDOM.render(<MyComponent />, document.getElementById('challenge-node'))

  //Pass Props to a Stateless Functional Component
  const CurrentDate = (props) => {
    return (
      <div>
        <p>The current date is: {props.date}</p>
      </div>
    );
  };
  
  class Calendar extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h3>What date is it?</h3>
          <CurrentDate date={Date()}/>
        </div>
      );
    }
  };

  const List = (props) => {
    return <p>{props.tasks.join(', ')}</p>
  };
  
  class ToDo extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>To Do Lists</h1>
          <h2>Today</h2>
          <List tasks={["walk dog", "workout"]}/>
          <h2>Tomorrow</h2>
          <List tasks={["walk cat", "workin", "eat"]}/>
        </div>
      );
    }
  };


  //Override default props
  const Items = (props) => {
    return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
  }
  
  Items.defaultProps = {
    quantity: 0
  }
  
  class ShoppingCart extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return <Items quantity={10}/>
    }
  };

  //Practice 

  import React from 'react'
  //Functional

  function App(props) {
    return (
      <div>
        <h1>{props.whatever}</h1>
      </div>
    )
  }

  //class
  class App extends React.Component{
    render(){
      return(
        <div>
          <h1>{this.props.whatever}</h1>
        </div>
      )
    }
  }

  export default App