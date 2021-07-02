class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            isFriendly: false,
            gender: '',
            favColor: 'blue'
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (event) {
        const {name,value, type, checked} = event.target
        type === 'checkbox' ? this.setState({ [name]: checked}) : this.setState({[name]:value})
    }

    //Make sure that the name property matches what's in the state(from constructor)
    //Formik is a good library 
    //handleSubmit would send the form data somewhere

    render(){
        return (
            <form onSubmit={this.handleSubmit}>   
            <input
                type = "text"
                name = "firstName" 
                onChange={this.handleChange}
                value={this.state.firstName}
            />
            <input
                type = "text"
                name = "lastName" 
                onChange={this.handleChange}
                value={this.state.lastName}
            />
            <label>
                <input 
                    type='checkbox'
                    name='isFriendly'
                    checked={this.state.isFriendly}
                    onChange={this.handleChange}
                        /> Is friendly?
            </label>

            <label>
                <input 
                    type='radio'
                    name='gender'
                    value='male'
                    checked={this.state.gender === "male"}
                    onChange={this.handleChange}
                        /> Man
            </label>
            <label>
                <input 
                    type='radio'
                    name='gender'
                    value='female'
                    checked={this.state.gender === "female"}
                    onChange={this.handleChange}
                        /> FeMan
            </label>

            <select
                value={this.state.favColor}
                onChange={this.handleChange}
                name='favColor'
            >

                <option value='blue'>Blue</option>
                <option value='green'>Green</option>
                <option value='red'>Red</option>
                <option value='orange'>Orange</option>
                <option value='yellow'>Yellow</option>
            </select>
            

                <h1>{this.state.firstName} {this.state.lastName}</h1>
                <h2>You are a {this.state.gender}</h2>
                <h2>Your favorite color is {this.state.favColor}</h2>

            <button>Submit</button>

            </form>
        )
    }
}

//Form practice
class ControlledInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: ''
      };
    this.handleChange = this.handleChange.bind(this)
    }

  handleChange (e) {
    this.setState({
      input: e.target.value
    })
  }
  
    render() {
      return (
        <div>
          <input 
          value={this.state.input}
          onChange={this.handleChange}
          />
          <h4>Controlled Input:</h4>
          <p>{this.state.input}</p>
        </div>
      );
    }
  };