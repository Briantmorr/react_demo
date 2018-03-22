import React from 'react';


export default props => {
    function handleClick(){
        console.log('I clicked the button');
        props.updateColor();
    }
//  setTimeout(function(){
//       let mybutton = document.querySelector('button');
//       mybutton.click();  
//     }, 3000);   
    return <button onClick= {handleClick} className='btn btn-outline-success'>Click</button>
}