import React, { useState } from 'react';
import axios from 'axios';
import './css/LoginForm.css';

function SignUpForm() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');



  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('https://localhost:7204/api/Authenticate/register', {
        username,
        email,
        password,
      });
  
      if (response.data.status === "Success") {
        window.location.href = '/login';
      } 
    } catch (error) {
        // Handle network or unexpected errors
        console.error('Axios Error:', error);
    
        if (error.response) {
          // Handle specific HTTP response errors if needed
          const responseData = error.response.data;
          let test = 0;
          if (responseData.message === "User already exists!") {
            setErrorMessage('نام کاربری موجود می باشد ،با یک نام کاربری دیگر دوباره تلاش کنید.');
          }

          if (responseData.message === "User creation failed! Please check user details and try again.") {
            setErrorMessage('رمزعبور نامعتبر ، فرمت مورد قبول : حداقل 8 حرف لاتین با علامت و حداقل یک حرف بزرگ ');
          } 
        } else {

          setErrorMessage('متاسفیم! مشکلی پیش آمده است لطفا با پشتیبانی تماس بگیرید.');
        }
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
          <label className="LoginItem">ایمیل</label>
           <input
            id="email"
            name="email"
            type="email"
            className="LoginItem btn"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
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
            ثبت نام
          </button>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <div className="forgetPassContainer">
          <a href="/login" className='loginlink'>
              <button type="button" className="loginbtn btn forgetPassbtn loginlink">
                فراموشی رمز
              </button>
            </a>
            <a href="/login" className='loginlink'>
              <button type="button" className="loginbtn btn forgetPassbtn loginlink">
                ورود کاربر
              </button>
            </a>

          </div>
          
        </div>
      </form>
    </div>
  );
}

export default SignUpForm;
