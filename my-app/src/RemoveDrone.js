import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const RemoveDrone = () => {
  const [storeID, setStoreID] = useState('');
  const [droneTag, setdroneTag] = useState('');
  const navigate = useNavigate();

  const handleStoreIDChange = (event) => {
    setStoreID(event.target.value);
  };
  const handledroneTagChange = (event) => {
    setdroneTag(event.target.value);
  };
  const handleCancel = () => {
    // Implement cancel logic here
    navigate('/');

  };

  const handleRemove = () => {
    // Make API request to remove the drone
    axios.delete('/RemoveDrone', {
      params: {
        ip_storeID: storeID,
        ip_droneTag: droneTag
      }
    })
    .then(response => {
      console.log('Drone removed successfully');
      // Handle success, if needed
    })
    .catch(error => {
      console.error('Error removing Drone: ', error);
      // Handle error, if needed
    });
  };

  return (
    <div>
      <h2>Remove Customer</h2>
      <div>
        <label htmlFor="storeID">Store ID:</label>
        <input
          type="text"
          id="storeID"
          value={storeID}
          onChange={handleStoreIDChange}
        />
         <label htmlFor="droneTag">Drone Tag:</label>
        <input
          type="text"
          id="droneTag"
          value={droneTag}
          onChange={handledroneTagChange}
        />
      </div>
      <div>
        <button onClick={handleCancel}>Cancel</button>
        <button onClick={handleRemove}>Remove Drone</button>
      </div>
    </div>
  );
};

export default RemoveDrone;
