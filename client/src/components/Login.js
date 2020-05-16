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
  const submitLogin = event => {
    event.preventDefault();
    // console.log(username, password);
    axios
      .post('http://localhost:5000/api/login', { username, password})
      .then(results => {
        // console.log('Results: ', results.data.payload);
        localStorage.setItem('token', results.data.payload);
        props.history.push('/bubblepage');
      })
      .catch(error => {
        console.log('Login error: ', error);
        setUsername('');
        setPassword('');
      })
  }
  
  return (
    <section className='login-page'>
      <h1>Welcome to the Bubble App!</h1>
      <form className='login-form' onSubmit={submitLogin}>
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
