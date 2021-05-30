import React, { Component } from 'react';
import TextComponent from './TextComponent.jsx';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            textData: ['something', 'another thing to say', 'blah blah blah', 'words words words', 'even more important things'],
        }
    }

    componentDidMount() {
        this.alertWindow('danger, danger Will Robinson!!!2222'); //was popping up second, now FIRST and only
    }

    alertWindow(text) {

        alert(text);
    }

    render() {
        return (
            <div className="textCompContainer">
                <h1 className="textCompHeaderText">This app will alert some text</h1>
                <TextComponent someText={this.state.textData} alertWindow={this.alertWindow} />
            </div>
        )
    }

}

export default App;

