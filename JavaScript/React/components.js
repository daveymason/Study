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