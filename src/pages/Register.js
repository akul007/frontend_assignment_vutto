import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import API from '../api/axios';
import TopBikeGallery from '../components/TopBikeGallery';
import '../styles/LoginRegisterLayout.css';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigate();

  const register = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/auth/register', { email, password });
      localStorage.setItem('accessToken', res.data.accessToken);
      nav('/');
    } catch (err) {
      alert(err.response?.data?.error || 'Registration failed');
    }
  };

  return (
    <div className="container-fluid p-0">
      {/* Added top padding to both form and gallery */}
      <div className="row g-0 pt-4 pt-md-5">
        
        {/* Form Section - appears first on mobile */}
        <div className="col-12 col-md-6 d-flex align-items-center justify-content-center bg-light p-4">
          <div className="w-100" style={{ maxWidth: '400px' }}>
            <h2 className="text-center mb-3">Join <span style={{ color: '#28a745' }}>Vutto</span></h2>
            <p className="text-center tagline">Your One-Stop Destination for Buying 2nd Hand Bikes in India 🚲</p>

            <form onSubmit={register}>
              <input className="form-control mb-2" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
              <input className="form-control mb-3" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
              <button className="btn btn-success w-100 mb-2">Register</button>
            </form>
            <p className="text-center">Already have an account? <Link to="/login">Login here</Link></p>

            <hr />

            <div className="about-section mt-3">
              <h5>About Us</h5>
              <p>🚀 <strong>1M+</strong> Customers Served</p>
              <p>🏍️ <strong>10,000+</strong> Bike Brands</p>
              <p>✅ <strong>100%</strong> Authorized and Verified Bikes</p>
              <p className="mt-3">
                At <strong>Vutto</strong>, we believe everyone deserves reliable, affordable two-wheelers. Our promise: trust, quality, and joy with every ride!
              </p>
            </div>
          </div>
        </div>

        {/* Gallery - shows below on small screens, side-by-side on desktop */}
        <div className="col-12 col-md-6 p-3 gallery-wrapper">
          <TopBikeGallery />
        </div>
      </div>
    </div>
  );
}

export default Register;
