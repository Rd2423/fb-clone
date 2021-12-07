import React from 'react'
import './Login.css'
import {Button}  from '@material-ui/core'
function Login() {
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
            <Button type="submit">
                Sign In
            </Button>
        </div>
    )
}

export default Login;
