import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const RemoveDronePilot = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleCancel = () => {
    // Implement cancel logic here
    navigate('/');

  };

  const handleRemove = () => {
    // Make API request to remove the customer
    axios.delete('/RemoveDronePilot', {
      params: {
        ip_uname: username
      }
    })
    .then(response => {
      console.log('Drone Pilot removed successfully');
      // Handle success, if needed
    })
    .catch(error => {
      console.error('Error removing Drone Pilot: ', error);
      // Handle error, if needed
    });
  };

  return (
    <div>
      <h2>Remove Drone Pilot</h2>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div>
        <button onClick={handleCancel}>Cancel</button>
        <button onClick={handleRemove}>Remove Drone Pilot</button>
      </div>
    </div>
  );
};

export default RemoveDronePilot;
