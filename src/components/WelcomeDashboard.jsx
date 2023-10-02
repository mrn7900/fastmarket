import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './css/WelcomeDashboard.css'

function WelcomeDashboard() {
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Retrieve the access token from local storage
    const token = localStorage.getItem('token');

    if (token) {
      // Decode the access token to extract user information
      const [headerEncoded, payloadEncoded] = token.split(".");
      const payload = JSON.parse(atob(payloadEncoded));

     
      const userUsername = payload['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];


      setUsername(userUsername);
    }
  }, []);

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('token');
      
      await axios.post(
        `https://localhost:7204/api/Authenticate/revoke/${username}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      localStorage.removeItem('token');

      window.location.href = '/login'; 
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  return (
    <div className='introdashboardContainer'>
        <div className='dashboardData'>
          <p>here is data</p>
      </div>
      <div className='logoutOption'>
        <p>{`کاربر ${username}`}</p>
        <button className="basketbtn btn exitbtn" onClick={handleLogout}>خروج</button>
      </div>


    </div>
  );
}

export default WelcomeDashboard;
