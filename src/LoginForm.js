import React from 'react';

export class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userInput: ''};
    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUserInput(e){
	  this.setState({
	    userInput: e.target.value
	  });
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.onSubmit(this.state.userInput);
  }

  render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <br /><br />
            <input type="text" placeholder="nimi" onChange={this.handleUserInput} value={this.state.userInput} /><br /><br />
            <input ref="password" type="password" placeholder="parool" /><br /><br />
            <button type="submit" value="Logi sisse" >Logi sisse</button>
            <h1>{this.state.userInput}</h1>
          </form>
        );
    }
}
export default LoginForm;

