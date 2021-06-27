//if/else
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        display: true
      }
      this.toggleDisplay = this.toggleDisplay.bind(this);
    }
    toggleDisplay() {
      this.setState((state) => ({
        display: !state.display
      }));
    }
    render() {
      // Conditionally Render based on State
      if (this.state.display) {
        return (
           <div>
             <button onClick={this.toggleDisplay}>Toggle Display</button>
             <h1>Displayed!</h1>
           </div>
        );
      } else {
        return (
          <div>
             <button onClick={this.toggleDisplay}>Toggle Display</button>
           </div>
        );
      }
    }
  };

  //Ternary
  const inputStyle = {
    width: 235,
    margin: 5
  };
  
  class CheckUserAge extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        userAge: '',
        input: ''
      }
      this.submit = this.submit.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
      this.setState({
        input: e.target.value,
        userAge: ''
      });
    }
    submit() {
      this.setState(state => ({
        userAge: state.input
      }));
    }
    render() {
      const buttonOne = <button onClick={this.submit}>Submit</button>;
      const buttonTwo = <button>You May Enter</button>;
      const buttonThree = <button>You Shall Not Pass</button>;
      return (
        <div>
          <h3>Enter Your Age to Continue</h3>
          <input
            style={inputStyle}
            type='number'
            value={this.state.input}
            onChange={this.handleChange}
          />
          <br />
          {/* Nested Ternary operator */}
          {
            this.state.userAge === ''
              ? buttonOne
              : this.state.userAge >= 18
                ? buttonTwo
                : buttonThree
            }
        </div>
      );
    }
  }