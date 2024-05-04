import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const DronePilotRoster = () => {
  const [roleData, setRoleData] = useState([]);
  const navigate = useNavigate()

  const handleCancel = () => {
    navigate('/');
  };

  useEffect(() => {
    // Fetch role distribution data from backend API
    axios.get('/DronePilotRoster')
      .then(response => {
        setRoleData(response.data);
        console.log(response.data)
      })
      .catch(error => {
        console.error('Error fetching DronePilotRoster data: ', error);
      });
  }, []); // Run once on component mount

  return (
    <div>
      <h2>Drone Pilot Roster</h2>
      <table>
        <thead>
          <tr>
            <th>pilot</th>
            <th>licenseID</th>
            <th>drone_serves store</th>
            <th>drone_tag</th>
            <th>successful_deliveries </th>
            <th>pending_deliveries </th>
          </tr>
        </thead>
        <tbody>
          {roleData.map((row, index) => (
            <tr key={index}>
              <td>{row.pilot}</td>
              <td>{row.licenseID}</td>
              <td>{row.drone_serves_store}</td>
              <td>{row.drone_tag}</td>
              <td>{row.successful_deliveries}</td>
              <td>{row.pending_deliveries}</td>
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

export default DronePilotRoster;
