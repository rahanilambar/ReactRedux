import React, { Component } from 'react';
import Axios from "axios";
import AuthenticationService from '../AuthenticationService';

class Login extends Component{

    state = {
        name: '',
        password: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        Axios({
            url: 'http://localhost:8080/login',
            method: 'POST',
            data: {
                name: this.state.name,
                password: this.state.password
            },
            headers: {
                "Content-Type": "application/json"
            },
            // withCredentials: true
            // credentials: 'same-origin'
        }).then(res=> {
            sessionStorage.setItem('token', res.headers['authorization'])
            if(AuthenticationService.isLoggedIn()){
                this.props.history.replace("/details")
            }
        }).catch(err => {
            console.log(err)
        })
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Username
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                </label>
                <label>
                    Password
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                </label>
                <button type="submit">Login</button>
            </form>
        );
    }
}

export default Login;