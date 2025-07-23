// src/components/LayoutWithSidebar.js
import React from 'react';
import Sidebar from '../components/Sidebar';

const LayoutWithSidebar = ({ children }) => (
  <div className="container-fluid p-0">
    <div className="row g-0">
      <div className="col-md-3 col-lg-2 border-end min-vh-100">
        <Sidebar />
      </div>
      <div className="col-md-9 col-lg-10 px-3 py-4">
        {children}
      </div>
    </div>
  </div>
);

export default LayoutWithSidebar;
