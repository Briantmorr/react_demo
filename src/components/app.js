import React from 'react';
import '../assets/css/app.css';
import logo from '../assets/images/logo.svg';
import shamrockL from '../assets/images/shamrock-l.png';
import shamrockR from '../assets/images/shamrock-r.png';
import gold from '../assets/images/pot-o-gold.png';
import Greeting from './greeting';

const user = {
    name: 'Fred Bob',
    favColor: 'gold'
}
const {name, favColor} = user;
const App = () => (
    <div>
        <div className="app">
            <Greeting {...user} food="pizza"/>
            <img src={gold} className="gold left" />
            <img src={logo} className="logo rotate"/>
            <div className="title-container">
                <img src={shamrockL} className="clover left rotate3d-right" />
                <h1>Welcome to React</h1>
                <img src={shamrockR} className="clover right rotate3d-left" />
            </div>
            <img src={gold} className="gold right"/>
            
        </div>
    </div>
);

export default App;
