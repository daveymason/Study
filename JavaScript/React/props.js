
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

  
//propTypes
const Items = (props) => {
    return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
  };
  
  Items.propTypes = {
     quantity: PropTypes.number.isRequired
  }
  
  Items.defaultProps = {
    quantity: 0
  };
  
  class ShoppingCart extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return <Items />
    }
  };