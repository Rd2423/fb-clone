import React, {useState} from 'react';
import './Login.css';
import { LOGIN_USER } from './utils/mutations';
import {Button}  from '@material-ui/core';
import { useMutation} from '@apollo/client';
import Auth from './utils/auth';

function Login(props) {
    const [state, setState] = useState({ email: '', password: ''});
    const [login, {error}] = useMutation(LOGIN_USER)

    const handleChange = (event) => {
        const {name, value} = event.target;

        setState({
            ...state, 
            [name]: value
        })
    }

    const handleSubmit = async(event) => {
        event.preventDefault();

        try {
            const {data} = await login({
                variables: {...state}
            });
            Auth.login(data.login.token);
        } catch (err) {
            console.error(err)
            console.log(err)
        }
    }
    return (
        <div className="login">
            <div className="login_logo">
                <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                alt="FB logo"
                />
                <img 
                src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
                alt='facebook'
                />
            </div>
            <form onSubmit={handleSubmit}>
              <input
                className="form-input"
                placeholder="email address"
                name="email"
                type="email"
                id="email"
                value={state.email}
                onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="******"
                name="password"
                type="password"
                id="password"
                value={state.password}
                onChange={handleChange}
              />
              </form>
            
            <Button type="submit">
                Sign In
            </Button>
        </div>
    )
}

export default Login;
