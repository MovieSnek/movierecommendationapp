const regeneratorRuntime = require('regenerator-runtime');
const axios = require('axios');
import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState(''); //setUsername to change state - useState assign initial value for state
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [failed, setFailed] = useState(false);
  const [registered, setRegistered] = useState(false);

  // TODO: Use React hook here - figure out what this is doing
  useEffect(() => {
    //use for getting data API
    console.log(username, password);
    console.log('isLoggedIn state: ', isLoggedIn);
  });

  // right dummy code for sign in / create account buttons
  // for now, just send us to the home page
  async function onLoginClick() {
    await axios
      .post('/login', {
        username,
        password,
      })
      .then((res) => {
        console.log(res);
        if (res.data === 'success') {
          setIsLoggedIn(true); //redirect us
        } else {
          // throw component error
          setIsLoggedIn(false);
          setFailed(true);
        }
      });
  }
  async function onRegisterClick() {
    // TODO: Add better functionality to the register (signup) button
    // TODO: Remove redundant code
    // TODO: Review the comment - does it make sense?
    // check against the data base if this is a valid username / password pair
    await axios
      .post('/login/signup', {
        username,
        password,
      })
      .then((res) => {
        console.log(res);
        // if (res) {
        //     console.log('Registration successful', res)
        // }
        // else {
        //     // throw component error
        //     setIsLoggedIn(false);
        //     setFailed(true);
        // }
      })
      .catch((err) => console.log(err));
  }

  // conditional rendering - if failed is true, render a warning popup
  if (!isLoggedIn) {
    return (
      <div>
        <h1 className='title'>Recommend Me!</h1>
        <div id='logIn' className='textbox'>
          <input
            type='text'
            id='username'
            placeholder={'username'}
            onChange={(e) => setUsername(e.target.value)}
            className='textbox'
          ></input>
          <div></div>
          <input
            type='text'
            id='password'
            placeholder={'password'}
            onChange={(e) => setPassword(e.target.value)}
            className='textbox'
          ></input>
        </div>
        <div className='login' id='buttons'>
          <button className='buttons' id='logInButton' onClick={onLoginClick}>
            Sign in
          </button>
          <div>
            <button className='buttons' id='signup' onClick={onRegisterClick}>
              Create new account
            </button>
          </div>
          <div id='customBtn' class='customGPlusSignIn'>
            <span class='icon'></span>
            <span class='buttonText'>Google</span>
          </div>
        </div>
      </div>
    );
  } else {
    return <Redirect to='/home' />;
  }
}

export default Login;
