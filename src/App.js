import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginForm from './LoginForm';
import HomePage from './HomePage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: '',
      signedIn: false
    };
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(username){
    console.log('kasutaja logis sisse', username);
    console.log(this.state.signedIn);
    this.setState({
      signedIn: true,
      username: username
    });

  }

  render() {
    console.log("rendering page");
    var showPage;
    if (this.state.signedIn) {
      showPage = <HomePage username={this.state.username}/>;
    } else {
      showPage = <LoginForm onSubmit={this.handleLogin}/>;
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          {showPage}
        </div>
      </div>
    );
  }
}
export default App;
