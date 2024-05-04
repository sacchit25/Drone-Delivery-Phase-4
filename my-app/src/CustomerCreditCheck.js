import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const CustomerCreditCheck = () => {
  const [roleData, setRoleData] = useState([]);
  const navigate = useNavigate()

  const handleCancel = () => {
    navigate('/');
  };

  useEffect(() => {
    // Fetch role distribution data from backend API
    axios.get('/CustomerCreditCheck')
      .then(response => {
        setRoleData(response.data);
        console.log(response.data)
      })
      .catch(error => {
        console.error('Error fetching role distribution data: ', error);
      });
  }, []); // Run once on component mount

  return (
    <div>
      <h2> Customer Credit Check</h2>
      <table>
        <thead>
          <tr>
            <th>customer_name</th>
            <th>rating</th>
            <th>current_credit</th>
            <th>credit_already_allocated</th>
          </tr>
        </thead>
        <tbody>
          {roleData.map((row, index) => (
            <tr key={index}>
              <td>{row.customer_name}</td>
              <td>{row.rating}</td>
              <td>{row.current_credit}</td>
              <td>{row.credit_already_allocated}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default CustomerCreditCheck;
