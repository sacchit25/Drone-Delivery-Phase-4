import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import RemoveCustomer from './RemoveCustomer';
import CancelOrder from './CancelOrder';
import DeliverOrder from './DeliverOrder';
import AddDrone from './AddDrone';
import AddCustomer from './AddCustomer';
import BeginOrder from './BeginOrder';
import AddOrderLine from './AddOrderLine';
import AddDronePilot from './AddDronePilot';
import AddProduct from './AddProduct';
import RemoveDronePilot from './RemoveDronePilot';
import RemoveProduct from './RemoveProduct';
import RemoveDrone from './RemoveDrone';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/RemoveCustomer" element={<RemoveCustomer />} />
        <Route path="/CancelOrder" element={<CancelOrder />} />
        <Route path="/DeliverOrder" element={<DeliverOrder/>} />
        <Route path="/AddDrone" element={<AddDrone/>} />
        <Route path="/AddCustomer" element={<AddCustomer/>} />
        <Route path="/BeginOrder" element={<BeginOrder/>} />
        <Route path="/AddOrderLine" element={<AddOrderLine/>} />
        <Route path="/AddDronePilot" element={<AddDronePilot/>} />
        <Route path="/AddProduct" element={<AddProduct/>} />
        <Route path="/RemoveDronePilot" element={<RemoveDronePilot />} />
        <Route path="/RemoveProduct" element={<RemoveProduct />} />
        <Route path="/RemoveDrone" element={<RemoveDrone />} />
      </Routes>
    </Router>
  );
};

export default App;
