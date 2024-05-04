import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const RepairRefuelDrone = () => {
  const [droneStore, setDroneStore] = useState('');
  const [droneTag, setDroneTag] = useState('');
  const [refueledTrips, setRefueledTrips] = useState(0);
  const navigate = useNavigate()

  const handleDroneStoreChange = (event) => {
    setDroneStore(event.target.value);
  };

  const handleDroneTagChange = (event) => {
    setDroneTag(event.target.value);
  };

  const handleRefueledTripsChange = (event) => {
    setRefueledTrips(parseInt(event.target.value)); // Convert input to integer
  };

  const handleRepairRefuel = () => {
    // Make API request to repair and refuel the drone
    axios.put(`/RepairRefuelDrone/${droneStore}/${droneTag}/${refueledTrips}`)
      .then(response => {
        console.log('Drone repaired and refueled successfully');
        // Handle success, if needed
      })
      .catch(error => {
        console.error('Error repairing and refueling drone: ', error);
        // Handle error, if needed
      });
  };

  const handleCancel = () => {
    navigate('/');
  };


  return (
    <div>
      <h2>Repair and Refuel Drone</h2>
      <div>
        <label htmlFor="droneStore">Drone Store:</label>
        <input
          type="text"
          id="droneStore"
          value={droneStore}
          onChange={handleDroneStoreChange}
        />
      </div>
      <div>
        <label htmlFor="droneTag">Drone Tag:</label>
        <input
          type="text"
          id="droneTag"
          value={droneTag}
          onChange={handleDroneTagChange}
        />
      </div>
      <div>
        <label htmlFor="refueledTrips">Refueled Trips:</label>
        <input
          type="number"
          id="refueledTrips"
          value={refueledTrips}
          onChange={handleRefueledTripsChange}
        />
      </div>
      <div>
        <button onClick={handleRepairRefuel}>Repair and Refuel</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default RepairRefuelDrone;
