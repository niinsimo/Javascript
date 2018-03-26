import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginForm from './LoginForm';
import HomePage from './HomePage';

class App extends Component {

  render() {
    var showPage = this.showPage;
    console.log(this);
    this.showPage = <LoginForm />;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {this.showPage}
      </div>
    );
  }
}
export default App;
