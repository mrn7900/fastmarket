import React, { useState } from 'react';
import axios from 'axios';
import './css/LoginForm.css';

function LoginForm() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const response = await axios.post('https://localhost:7204/api/Authenticate/login', {
        username,
        password,
      });

    
      const token = response.data.token;
      localStorage.setItem('token', token);


      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;


      window.location.href = '/dashboard';
    } catch (error) {

      setError('نام کاربری و یا رمزعبور نامعتبر می باشد');
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
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <label className="LoginItem">رمزعبور</label>
          <input
            id="password"
            name="password"
            type="password"
            className="LoginItem btn"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="loginbtn btn">
            ورود
          </button>
          {error && <div className="error-message">{error}</div>}
          <div className="forgetPassContainer">
          <a href="/login" className='loginlink'>
              <button type="button" className="loginbtn btn forgetPassbtn loginlink">
                فراموشی رمز
              </button>
            </a>
            <a href="/signup" className='loginlink'>
              <button type="button" className="loginbtn btn forgetPassbtn loginlink">
                ثبت نام
              </button>
            </a>
          </div>
          <a href="/home" className='loginlink'>
              <button type="button" className="loginbtn btn forgetPassbtn loginlink">
                صفحه اصلی
              </button>
            </a>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
