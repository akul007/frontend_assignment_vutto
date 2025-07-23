import React from 'react';
import TopBikeGallery from '../components/TopBikeGallery';
import '../styles/LoginRegisterLayout.css';

const LoginRegisterLayout = ({ children }) => {
  return (
    <div className="login-register-layout">
      <div className="left-panel">
        <TopBikeGallery />
        <div className="tagline">
          <h2>Vutto: One Stop Destination for Buying 2nd Hand Bikes in India</h2>
          <p>✔ 1M+ Customers Served</p>
          <p>✔ 10,000+ Bike Brands</p>
          <p>✔ 100% Authorized & Verified Bikes</p>
        </div>
        <div className="about-us">
          <h3>About Us</h3>
          <p>
            In India, two-wheelers are lifelines. At Vutto, we ensure every ride is safe,
            reliable, and joyful. Inspired by "Woot", we want every Vutto bike to bring
            happiness.
          </p>
          <p>
            🚀 Affordable pre-owned bikes, refurbished with 6-month warranty & free services.
            Our goal: quality + affordability with full transparency.
          </p>
        </div>
      </div>
      <div className="right-panel">
        <div className="form-box">{children}</div>
      </div>
    </div>
  );
};

export default LoginRegisterLayout;
