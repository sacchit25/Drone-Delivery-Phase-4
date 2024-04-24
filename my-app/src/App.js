import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import RemoveCustomer from './RemoveCustomer';
import CancelOrder from './CancelOrder';
import DeliverOrder from './DeliverOrder';
import AddDrone from './AddDrone';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/RemoveCustomer" element={<RemoveCustomer />} />
        <Route path="/CancelOrder" element={<CancelOrder />} />
        <Route path="/DeliverOrder" element={<DeliverOrder/>} />
        <Route path="/AddDrone" element={<AddDrone/>} />
      </Routes>
    </Router>
  );
};

export default App;
