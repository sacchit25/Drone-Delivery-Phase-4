import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const IncreaseCustomerCredit = () => {
  const [username, setUsername] = useState('');
  const [money, setMoney] = useState(0);
  const navigate = useNavigate()

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleMoneyChange = (event) => {
    setMoney(parseInt(event.target.value)); // Convert input to integer
  };

  const handleIncreaseCredit = () => {
    // Make API request to increase customer credit
    axios.put(`/IncreaseCustomerCredit/${username}/${money}`)
      .then(response => {
        console.log('Credit increased successfully');
        // Handle success, if needed
      })
      .catch(error => {
        console.error('Error increasing credit: ', error);
        // Handle error, if needed
      });
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div>
      <h2>Increase Customer Credit</h2>
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
        <label htmlFor="money">Money:</label>
        <input
          type="number"
          id="money"
          value={money}
          onChange={handleMoneyChange}
        />
      </div>
      <div>
        <button onClick={handleIncreaseCredit}>Increase Credit</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default IncreaseCustomerCredit;
