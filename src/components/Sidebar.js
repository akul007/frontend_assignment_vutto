import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Sidebar.css'; // ← create this CSS file

const Sidebar = () => (
  <div className="list-group p-3 custom-sidebar">
    <NavLink to="/" className="list-group-item custom-link">All Listings</NavLink>
    <NavLink to="/my-listings" className="list-group-item custom-link">My Listings</NavLink>
    <NavLink to="/bike/add" className="list-group-item custom-link">Add Bike</NavLink>
  </div>
);

export default Sidebar;
