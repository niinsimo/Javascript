import React from 'react';
import LoginForm from './LoginForm';

export class HomePage extends React.Component {
  render() {
        return (
            <h1>{this.state.userInput}</h1>
        );
    }
}
export default HomePage;

