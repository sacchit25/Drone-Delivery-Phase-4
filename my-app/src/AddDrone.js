import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const AddDrone = () => {
  const [storeId, setStoreId] = useState('');
  const [droneTag, setDroneTag] = useState(0);
  const [capacity, setCapacity] = useState(0);
  const [remaining_trips, setRemaining_trips] = useState(0);
  const [pilot, setPilot] = useState('');
  const navigate = useNavigate();

  const handleStoreIdChange = (event) => {
    setStoreId(event.target.value);
  };
  const handlecapacityChange = (event) => {
    setCapacity(event.target.value);
  };
  const handlepilotChange = (event) => {
    setPilot(event.target.value);
  };
  const handledroneTagChange = (event) => {
    setDroneTag(event.target.value);
  };
  const handleremaining_tripsChange = (event) => {
    setRemaining_trips(event.target.value);
  };
  const handleCancel = () => {
    // Implement cancel logic here
    navigate('/');
  };

  const handleAddDrone = () => {
    // Implement delivery logic here
    axios.put(`/AddDrone/${storeId}/${droneTag}/${capacity}/${remaining_trips}/${pilot}`)
    .then(response => {
      console.log('Added Drone successfully');
    })
    .catch(error => {
      console.error('Error Adding Drone: ', error);
    });
  };

  return (
    <div>
      <h2>Add Drone</h2>
      <div>
        <label htmlFor="storeId">Store ID:</label>
        <input
          type="text"
          id="storeId"
          value={storeId}
          onChange={handleStoreIdChange}
        />
         <label htmlFor="droneTag">Drone Tag:</label>
        <input
          type="text"
          id="droneTag"
          value={droneTag}
          onChange={handledroneTagChange}
        />
         <label htmlFor="capacity">Capacity:</label>
        <input
          type="text"
          id="capacity"
          value={capacity}
          onChange={handlecapacityChange}
        />
         <label htmlFor="remaining_trips">Remaining Trips:</label>
        <input
          type="text"
          id="remaining_trips"
          value={remaining_trips}
          onChange={handleremaining_tripsChange}
        />
         <label htmlFor="pilot">Pilot:</label>
        <input
          type="text"
          id="pilot"
          value={pilot}
          onChange={handlepilotChange}
        />
      </div>
      <div>
        <button onClick={handleCancel}>Cancel</button>
        <button onClick={handleAddDrone}>Add Drone</button>
      </div>
    </div>
  );
};

export default AddDrone;
