import React from 'react';

function Greeting(props){
    const {name, favColor} = props;
    const greetingStyle = {
        color: favColor,
        fontSize:'20px',
        transform: 'translateX(30%)'
    }
    console.log(greetingStyle);
    return <h1 style={greetingStyle}> Hello, {name}, welcome to our site!</h1>
}

export default Greeting; 