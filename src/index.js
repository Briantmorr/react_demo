import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';

const user = {
    firstName: 'Try',
    lastName: 'Me'
};
function greetUser(user){
    return user.firstName + ' ' + user.lastName;
}
const greeting = <h1>Welcome to react: {greetUser(user)}</h1>;
ReactDOM.render(
    // <App />,
    greeting,
    document.getElementById('root')
);
