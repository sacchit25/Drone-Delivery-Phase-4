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
import IncreaseCustomerCredit from './IncreaseCustomerCredit';
import RepairRefuelDrone from './RepairRefuelDrone';
import SwapDroneControl from './SwapDroneControl';
import RoleDistributionTable from './RoleDistributionTable';
import CustomerCreditCheck from './CustomerCreditCheck';
import DroneTrafficControl from './DroneTrafficControl';
import MostPopularProducts from './MostPopularProducts';
import DronePilotRoster from './DronePilotRoster';
import StoreSalesOverview from './StoreSalesOverview';
import OrdersInProgress from './OrdersInProgress';

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
        <Route path="/IncreaseCustomerCredit" element={<IncreaseCustomerCredit />} />
        <Route path="/RepairRefuelDrone" element={<RepairRefuelDrone />} />
        <Route path="/SwapDroneControl" element={<SwapDroneControl />} />
        <Route path="/RoleDistributionTable" element={<RoleDistributionTable />} />
        <Route path="/CustomerCreditCheck" element={<CustomerCreditCheck />} />
        <Route path="/DroneTrafficControl" element={<DroneTrafficControl />} />
        <Route path="/MostPopularProducts" element={<MostPopularProducts />} />
        <Route path="/DronePilotRoster" element={<DronePilotRoster />} />
        <Route path="/StoreSalesOverview" element={<StoreSalesOverview />} />
        <Route path="/OrdersInProgress" element={<OrdersInProgress />} />
      </Routes>
    </Router>
  );
};

export default App;
