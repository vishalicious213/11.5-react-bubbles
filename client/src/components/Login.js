import React, { useState } from "react";
import axios from 'axios';

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const updateUsername = event => {
      setUsername(event.target.value);
  }
  
  const updatePassword = event => {
      setPassword(event.target.value);
  }
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <section className='login-page'>
      <h1>Welcome to the Bubble App!</h1>
      <form className='login-form'>
        <input 
          type='text' 
          name='username' 
          placeholder='Username'
          value={username}
          onChange={updateUsername}
        />
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={password}
          onChange={updatePassword}
        />
        <button>Login</button>
      </form>
    </section>
  );
};

export default Login;
