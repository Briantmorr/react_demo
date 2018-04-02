import React, { Component } from 'react';
import '../assets/css/app.css';
import logo from '../assets/images/logo.svg';
console.dir(React.Component);
class App extends Component {
    constructor(props){
        super(props);
        console.log('my props are: ', props);
        var a = 4;
        console.dir(a);
    }
    render() {
        console.log('my props are: ', this.props);
        console.log('in render: ', this.a); //undefined
        return (
            <div>
                <div className="app">
                    <img src={logo} className="logo rotate" />
                    <h1>Welcome to React {this.a++}{this.a}</h1>
                </div>
            </div>
        );
    }
}

export default App;
