import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {authUser} from '../../ducks/reducer';

class Auth extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            profilePicture: ''
        }
        this.register = this.register.bind(this);
        this.login = this.login.bind(this);
    }

    handleUpdateUsername = (e) => {
        this.setState({ username: e.target.value })
    }

    handleUpdatePassword = (e) => {
        this.setState({ password: e.target.value })
    }

    register() {
        axios.post('/register', (this.state.username, this.state.password))
            .then(() => {
                window.viewpoint('http://localport:3000/dashboard')
            })
    }

    login() {
        axios.post('/login', (this.state.username, this.state.password))
        .then(() => {
            window.viewpoint('http://localport:3000/dashboard')
        })
    }

    render() {
        return (
            <div>
                <h1>Auth</h1>
                <p>Username: <input value={this.state.username} onChange={this.handleUpdateUsername} ></input></p>
                <p>Password: <input value={this.state.password} onChange={this.handleUpdatePassword} ></input></p>
                <button onClick={this.login}>Login</button>
                <button onClick={this.register}>Register</button>
            </div>
        )
    }
}

export default connect(null, {authUser})(Auth)