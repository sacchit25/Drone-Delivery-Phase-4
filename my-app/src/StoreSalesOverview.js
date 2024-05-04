import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const StoreSalesOverview = () => {
  const [roleData, setRoleData] = useState([]);
  const navigate = useNavigate()

  const handleCancel = () => {
    navigate('/');
  };

  useEffect(() => {
    // Fetch role distribution data from backend API
    axios.get('/StoreSalesOverview')
      .then(response => {
        setRoleData(response.data);
        console.log(response.data)
      })
      .catch(error => {
        console.error('Error fetching StoreSalesOverview data: ', error);
      });
  }, []); // Run once on component mount

  return (
    <div>
      <h2>StoreSalesOverview</h2>
      <table>
        <thead>
          <tr>
            <th>store_id</th>
            <th>sname</th>
            <th>manager</th>
            <th>revenue</th>
            <th>incoming_revenue </th>
            <th>incoming_orders </th>
          </tr>
        </thead>
        <tbody>
          {roleData.map((row, index) => (
            <tr key={index}>
              <td>{row.store_id}</td>
              <td>{row.sname}</td>
              <td>{row.manager}</td>
              <td>{row.revenue}</td>
              <td>{row.incoming_revenue}</td>
              <td>{row.incoming_orders}</td>
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

export default StoreSalesOverview;
