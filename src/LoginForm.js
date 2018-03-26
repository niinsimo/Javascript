import React from 'react';
import HomePage from './HomePage';
import App from './App';

export class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userInput: ''};
    this.handleUserInput = this.handleUserInput.bind(this);
  }
  handleUserInput(e){
	  this.setState({
	    userInput: e.target.value
	  });
  }
  handleSubmit(e){
    this.showPage = this.showPage.bind(this);
	  this.showPage = <HomePage />;
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

