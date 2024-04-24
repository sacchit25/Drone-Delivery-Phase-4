import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import RemoveCustomer from './RemoveCustomer';
import CancelOrder from './CancelOrder';
import DeliverOrder from './DeliverOrder';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/RemoveCustomer" element={<RemoveCustomer />} />
        <Route path="/CancelOrder" element={<CancelOrder />} />
        <Route path="/DeliverOrder" element={<DeliverOrder/>} />
      </Routes>
    </Router>
  );
};

export default App;
