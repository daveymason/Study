//Basic state example
class StatefulComponent extends React.Component {
    constructor(props) {
      super(props);
        this.state = {name: ""}
    }
    render() {
      return (
        <div>
          <h1>{this.state.name}</h1>
        </div>
      );
    }
  };
  
//Render Props to UI
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

  //Render State to UI
  class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'freeCodeCamp'
      }
    }
    render() {
      return (
        <div>
          { /* Change code below this line */ }
          <h1>{this.state.name}</h1>
          { /* Change code above this line */ }
        </div>
      );
    }
  };

