import React from 'react';

export default props => {
   console.log(props.color);
    const boxStyle = {
        display: 'inline-block',
        height: '100px',
        width: '100px',
        backgroundColor: props.color,
        margin: '20px',
        border: '50px ridge rgba(0,50,0,0.7)',
        transform: `rotate(${props.rotate}deg)`,
        transition: 'transform 2.5s',
        borderRadius: '5%'
    }
    return <div style={boxStyle}/>
}