import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import API from '../api/axios';
import TopBikeGallery from '../components/TopBikeGallery';
import '../styles/LoginRegisterLayout.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/auth/login', { email, password });
      localStorage.setItem('accessToken', res.data.accessToken);
      nav('/');
    } catch (err) {
      alert(err.response?.data?.error || 'Login failed');
    }
  };

  return (
    <div className="container-fluid p-0">
      {/* Add top padding here for both sections */}
      <div className="row g-0 pt-4 pt-md-5">
        
        {/* Login Form First */}
        <div className="col-12 col-md-6 d-flex align-items-center justify-content-center bg-light p-4">
          <div className="w-100" style={{ maxWidth: '400px' }}>
            <h2 className="text-center mb-3">
              Welcome to <span style={{ color: '#007bff' }}>Vutto</span>
            </h2>
            <p className="text-center tagline">
              Your One-Stop Destination for Buying 2nd Hand Bikes in India 🚲
            </p>

            <form onSubmit={login}>
              <input
                className="form-control mb-2"
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                className="form-control mb-3"
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button className="btn btn-primary w-100 mb-2">Login</button>
            </form>
            <p className="text-center">
              No account? <Link to="/register">Register here</Link>
            </p>

            <hr />

            <div className="about-section mt-3">
              <h5>About Us</h5>
              <p>🚀 <strong>1M+</strong> Customers Served</p>
              <p>🏍️ <strong>10,000+</strong> Bike Brands</p>
              <p>✅ <strong>100%</strong> Authorized and Verified Bikes</p>
              <p className="mt-3">
                <strong>Vutto</strong>: Creating those happy moments. In India, two-wheelers are lifelines. We offer affordable, reliable, and verified bikes with love and care. 😊
              </p>
            </div>
          </div>
        </div>

        {/* Gallery - appears below on mobile, right side on desktop */}
        <div className="col-12 col-md-6 p-3 gallery-wrapper">
          <TopBikeGallery />
        </div>
      </div>
    </div>
  );
}

export default Login;
