import React, { Component } from 'react';

class Form extends Component {
    constructor(props){
        super(props);

        this.state = {
            form: {
                email: '',
                password: ''
            }
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleFormSubmit(event){
        event.preventDefault();
        console.log('submitted state: ', this.state);
    }
    handleInputChange(event){
        const {name, value} = event.target;
        console.log('Value ', event.target.value);
        console.log('name:', event.target.name);

        this.setState({
            form:{
                ...this.state.form,
                [name]: value
                
            }
        });
    }
    render() {
        const formStyle = {
            fontSize: '24px',
            color: 'grey',
        }

        const {email, password} = this.state.form;
        console.log('state: ', this.state);
        return <form onSubmit={this.handleFormSubmit.bind(this)}>
                <h1>I'm a form</h1>
                <div style={formStyle}>
                    <label>Email</label>
                    <br/>
                    <input name='email' type="text" value={email} onChange={event => this.handleInputChange(event)} required/>
                </div>
                <div style={formStyle}>
                    <label>Password</label>
                    <br/>
                    <input  name='password' type="password"  value={password} onChange={event => this.handleInputChange(event)} required/>
                </div>
                <input type="submit"/>
                </form>
    }
}
export default Form;