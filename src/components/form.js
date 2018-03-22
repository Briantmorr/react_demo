import React, { Component } from 'react';

class Form extends Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }
    render() {
        const formStyle = {
            fontSize: '24px',
            color: 'grey',
        }

        const {email, password} = this.state;

        return <form>
                <h1>I'm a form</h1>
                <div style={formStyle}>
                    <label>Email</label>
                    <br/>
                    <input type="text" value={email}/>
                </div>
                <div style={formStyle}>
                    <label>Password</label>
                    <br/>
                    <input  type="password"  value={password}/>
                </div>
                <input type="submit"/>
                </form>
    }
}
export default Form;