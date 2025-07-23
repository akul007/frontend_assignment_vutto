import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Dashboard = () => (
  <div>
    <Navbar />
    <div className="d-flex">
      <div style={{width:'200px', borderRight:'1px solid #ddd'}}>
        <Sidebar />
      </div>
      <div className="p-3 flex-grow-1">
        <Outlet />
      </div>
    </div>
  </div>
);

export default Dashboard;
