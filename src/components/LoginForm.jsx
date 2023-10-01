import React, { useState } from 'react';
import axios from 'axios';
import './css/LoginForm.css';

function LoginForm() {
  // Define state variables to store user input
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to your .NET API's login endpoint
      const response = await axios.post('https://localhost:7204/api/Authenticate/login', {
        username,
        password,
      });

      // If the login is successful, store the access token securely (e.g., in local storage)
      const token = response.data.token;
      localStorage.setItem('token', token);
      console.log('API Response:', response.data);

      // Store the access token if available
     
      if (token) {
        localStorage.setItem('token', token);
        console.error('token access is :'+ token);
      } else {
        console.error('Access token not found in API response.');
      }
      // Redirect the user or perform any necessary actions
      // For example, you can navigate to another page using React Router.
      // Replace '/dashboard' with the appropriate route.
      window.location.href = '/dashboard';
    } catch (error) {
      // Handle login errors (e.g., display an error message to the user)
      setError('Invalid username or password');
    }

    
  };

  return (
    <div className="LoginContainer">
      <form className="LoginForm" onSubmit={handleSubmit}>
        <div>
          <img src="" alt="" />
        </div>
        <div className="LoginForm">
          <label className="LoginItem">نام کاربری</label>
          <input
            type="text"
            id="username"
            name="username"
            className="LoginItem btn"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label className="LoginItem">رمزعبور</label>
          <input
            id="password"
            name="password"
            type="password"
            className="LoginItem btn"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="loginbtn btn">
            ورود
          </button>
          <div className="forgetPassContainer">
            <button type="button" className="loginbtn btn forgetPassbtn">
              فراموشی رمز
            </button>
            <button type="button" className="loginbtn btn forgetPassbtn">
              ثبت نام
            </button>
          </div>
          {error && <div className="error-message">{error}</div>}
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
