import React from 'react';

export class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Tere, </h1>
                <h1>{this.props.username}</h1>
            </div>
        );
    }
}
export default HomePage;

