import React from 'react';
import { useNavigate } from 'react-router';

function login() {
  let navigate = useNavigate();
  function handleClick() {
    navigate('/dashboard');
  }
  return (
    <div>
      login
      <input type='text' placeholder='username' />
      <input type='text' placeholder='password' />
      <button onClick={handleClick}>Login</button>
    </div>
  );
}

export default login;
