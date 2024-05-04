import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const DroneTrafficControl = () => {
  const [roleData, setRoleData] = useState([]);
  const navigate = useNavigate()

  const handleCancel = () => {
    navigate('/');
  };

  useEffect(() => {
    // Fetch role distribution data from backend API
    axios.get('/DroneTrafficControl')
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
      <h2>Drone Traffic Control</h2>
      <table>
        <thead>
          <tr>
            <th>drone_serves_store</th>
            <th>drone_tag</th>
            <th>pilot</th>
            <th>total_weight_allowed</th>
            <th>current_weight </th>
            <th>deliveres_allowed </th>
            <th>deliveries_in_progress </th>
          </tr>
        </thead>
        <tbody>
          {roleData.map((row, index) => (
            <tr key={index}>
              <td>{row.drone_serves_store}</td>
              <td>{row.drone_tag}</td>
              <td>{row.pilot}</td>
              <td>{row.total_weight_allowed}</td>
              <td>{row.current_weight}</td>
              <td>{row.deliveres_allowed}</td>
              <td>{row.deliveries_in_progress}</td>
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

export default DroneTrafficControl;
