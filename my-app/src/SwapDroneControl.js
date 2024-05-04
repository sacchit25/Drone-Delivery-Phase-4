import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const SwapDroneControl = () => {
  const [incomingPilot, setIncomingPilot] = useState('');
  const [outgoingPilot, setOutgoingPilot] = useState('');
  const navigate = useNavigate()

  const handleIncomingPilotChange = (event) => {
    setIncomingPilot(event.target.value);
  };

  const handleOutgoingPilotChange = (event) => {
    setOutgoingPilot(event.target.value);
  };

  const handleSwapDroneControl = () => {
    // Make API request to swap drone control
    axios.put(`/SwapDroneControl/${incomingPilot}/${outgoingPilot}`)
      .then(response => {
        console.log('Drone control swapped successfully');
        // Handle success, if needed
      })
      .catch(error => {
        console.error('Error swapping drone control: ', error);
        // Handle error, if needed
      });
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div>
      <h2>Swap Drone Control</h2>
      <div>
        <label htmlFor="incomingPilot">Incoming Pilot:</label>
        <input
          type="text"
          id="incomingPilot"
          value={incomingPilot}
          onChange={handleIncomingPilotChange}
        />
      </div>
      <div>
        <label htmlFor="outgoingPilot">Outgoing Pilot:</label>
        <input
          type="text"
          id="outgoingPilot"
          value={outgoingPilot}
          onChange={handleOutgoingPilotChange}
        />
      </div>
      <div>
        <button onClick={handleSwapDroneControl}>Swap Control</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default SwapDroneControl;
