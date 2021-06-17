
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

 //this.props
 class ReturnTempPassword extends React.Component {
    constructor(props) {
      super(props);
  
    }
    render() {
      return (
          <div>
              { /* Change code below this line */ }
              
              <p>Your temporary password is: <strong>{this.props.tempPassword}</strong></p>
  
              { /* Change code above this line */ }
          </div>
      );
    }
  };
  
  class ResetPassword extends React.Component {
    constructor(props) {
      super(props);
  
    }
    render() {
      return (
          <div>
            <h2>Reset Password</h2>
            <h3>We've generated a new temporary password for you.</h3>
            <h3>Please reset this password from your account settings ASAP.</h3>
            { /* Change code below this line */ }
            <ReturnTempPassword tempPassword="xxxxxxxx" />
            { /* Change code above this line */ }
          </div>
      );
    }
  };

  //Props without state
  class CampSite extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <Camper/>
        </div>
      );
    }
  };
  // Change code below this line
  class Camper extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <p>{this.props.name}</p>
      );
    }
  };
   Camper.defaultProps = {
      name: 'CamperBot'
    },
      Camper.propTypes = {
       name: PropTypes.string.isRequired
    }