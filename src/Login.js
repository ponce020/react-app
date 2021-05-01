import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css'

function Login() {

const signIn = () => {
    //sing in..
}

    return (
        <div className='login'>
            <div className='login__logo'>
                <img
                src='https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg'
                alt=''
                />
                <img
                src='https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg'
                alt=''
                />
            </div>
            <Button type='submit' onClick={signIn}>Sign in</Button>
        </div>
    )
}

export default Login
