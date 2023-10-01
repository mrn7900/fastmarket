import React, { useEffect, useState } from 'react';
import axios from 'axios';

function WelcomeDashboard() {
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Retrieve the access token from local storage
    const token = localStorage.getItem('token');

    if (token) {
      // Decode the access token to extract user information
      const [headerEncoded, payloadEncoded] = token.split(".");
      const payload = JSON.parse(atob(payloadEncoded));

      // Access the "username" field from the decoded token
      const userUsername = payload['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];

      // Set the "username" in the state
      setUsername(userUsername);
    }
  }, []);

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('token');
      
      // Make a POST request to the logout endpoint with the access token in the header
      await axios.post(
        `https://localhost:7204/api/Authenticate/revoke/${username}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Remove the access token from local storage
      localStorage.removeItem('token');

      // Redirect the user to the login page or perform any other necessary actions
      window.location.href = '/login'; // Replace with your login page route
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  return (
    <div>
      <h2>{`Dear "${username}" Welcome to Dashboard`}</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default WelcomeDashboard;
