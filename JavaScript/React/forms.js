class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            firstName: '',
            lastName: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (event) {
        const {name,value} = event.target
        this.setState({
            [name]:value            
        })
    }

    //Make sure that the name property matches what's in the state(from constructor)

    render(){
        return (
            <form> 
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
            {this.state.firstName}
            {this.state.lastName}
            </form>
        )
    }
}