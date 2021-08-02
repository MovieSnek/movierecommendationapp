const regeneratorRuntime = require("regenerator-runtime");
const axios = require("axios");

import React, { useState, useEffect } from "react";
import { ReactDOM } from "react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
// import '../stylesheets/styles.css';


function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [failed, setFailed] = useState(false);
    const [registered, setRegistered] = useState(false);
    // may need a few more for page behavior
    useEffect(() => {
        console.log(username,password);
        console.log("isLoggedIn state: ", isLoggedIn);
    });

    // right dummy code for sign in / create account buttons
    // for now, just send us to the home page
    async function onLoginClick() {
        await axios.post('/login', {
            username,
            password,
          })
            .then ( (res) => {
                console.log(res)
                if (res.data === 'success') {
                    setIsLoggedIn(true); //redirect us
                }
                else {
                    // throw component error
                    setIsLoggedIn(false);
                    setFailed(true);
                }
            })
    };
    function onRegisterClick() {
        // check agains the data base if this is a valid username / password pair
        
        setIsLoggedIn(true);
    };

    // conditional rendering - if failed is true, render a warning popup 
    if (!isLoggedIn) {
    return  (
        <div>
            <div id='logIn'>
                <input type='text' id='username' placeholder='Enter username here' value={username} onChange={e => setUsername(e.target.value)}></input>
                <input type='text' id='password' placeholder='Enter password here' value={password} onChange={e => setPassword(e.target.value)}></input>
            </div>
            <div className="login" id='buttons'>
                <button  className="buttons" id="logInButton" onClick={onLoginClick}>Sign in</button>
                <button  className="buttons"  id="signup">Create new account</button> 
            </div>
        </div>
        );
    } else {
    return (
            <Redirect to='/home' />
        );
    }
}

export default Login;
