import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Navbar() {
  const nav = useNavigate();

  const logout = () => {
    localStorage.removeItem('accessToken');
    nav('/login');
  };

  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Brand aligned to the left */}
        <Link to="/" className="navbar-brand mb-0 h1" style={{ marginLeft: '0.5rem' }}>
          Vutto
        </Link>

        {/* Logout button aligned to the right */}
        <button className="btn btn-outline-light btn-sm" onClick={logout}>
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
