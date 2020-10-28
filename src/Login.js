import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css';
import { auth, provider } from './firebase';

function Login() {

    const signIn = () => {
        //* sign in with Google Account
        auth
            .signInWithPopup(provider)
            .then(result => {
                console.log(result);
            }).catch((error) => alert(error.message));
    }

    return (
        <div className="Login">
            <div className="login__logo">
                <img src="https://upload.wikimedia.org/wikipedia/en/5/5a/Shaheen_College_Logo_Dhaka.png" alt="Logo" />
            </div>
            <div className="login__button">
                <Button type="submit" onClick={signIn}>Login</Button>
            </div>
        </div>
    )
}

export default Login
