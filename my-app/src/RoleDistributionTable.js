import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const RoleDistributionTable = () => {
  const [roleData, setRoleData] = useState([]);
  const navigate = useNavigate()

  const handleCancel = () => {
    navigate('/');
  };

  useEffect(() => {
    // Fetch role distribution data from backend API
    axios.get('/RoleDistributionTable')
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
      <h2>Role Distribution</h2>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {roleData.map((row, index) => (
            <tr key={index}>
              <td>{row.category}</td>
              <td>{row.total}</td>
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

export default RoleDistributionTable;
