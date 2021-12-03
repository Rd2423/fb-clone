import React from 'react'
import './Login.css'
import {Button}  from '@material-ui/core'
import { auth, provider } from './firebase'
function Login() {
    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(result => {
            console.log(result)
        })
        .catch((error) => alert(error.message))
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
            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
        </div>
    )
}

export default Login;
