import React, { useEffect, useState } from 'react';

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
      const userUsername = payload.name;

      // Set the "username" in the state
      setUsername(userUsername);
      
    }
  }, []);

  return (
    <div>
      <h2>{`Dear "${username}" Welcome to Dashboard`}</h2>
    </div>
  );
}

export default WelcomeDashboard;
