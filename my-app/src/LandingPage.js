import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div>
      <h1>Procedures</h1>
      <div>
        <Link to="/DeliverOrder"><button>Deliver Order</button></Link>
        <Link to="/RemoveCustomer"><button>Remove Customer</button></Link>
        <Link to="/CancelOrder"><button>Cancel Order</button></Link>
        <Link to="/AddDrone"><button>Add Drone</button></Link>
        <Link to="/AddCustomer"><button>Add Customer</button></Link>
        <Link to="/BeginOrder"><button>Begin Order</button></Link>
        <Link to="/AddOrderLine"><button>Add Order Line</button></Link>
        <Link to="/AddDronePilot"><button>Add Drone Pilot</button></Link>
        <Link to="/AddProduct"><button>Add Product</button></Link>
        <Link to="/RemoveDronePilot"><button>Remove Drone Pilot</button></Link>
        <Link to="/RemoveProduct"><button>Remove Product</button></Link>
        <Link to="/RemoveDrone"><button>Remove Drone</button></Link>
        <Link to="/IncreaseCustomerCredit"><button>Increase Customer Credit</button></Link>
        <Link to="/RepairRefuelDrone"><button>Repair Refuel Drone</button></Link>
        <Link to="/SwapDroneControl"><button>Swap Drone Control</button></Link>
      </div>
      <h1>Views</h1>
      <Link to="/RoleDistributionTable"><button>Role Distribution Table</button></Link>
      <Link to="/CustomerCreditCheck"><button>Customer Credit Check Table</button></Link>
      <Link to="/DroneTrafficControl"><button>Customer Drone Traffic Control Table</button></Link>
      <Link to="/MostPopularProducts"><button>Most Popular Products Table</button></Link>
      <Link to="/DronePilotRoster"><button>Drone Pilot Roster Table</button></Link>
      <Link to="/StoreSalesOverview"><button>StoreSalesOverview Table</button></Link>
      <Link to="/OrdersInProgress"><button>OrdersInProgress Table</button></Link>
    </div>
  );
};

export default LandingPage;