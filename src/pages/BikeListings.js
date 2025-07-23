// src/pages/BikeListings.js
import React, { useState, useEffect } from 'react';
import axios from '../api/axios';
import { Link } from 'react-router-dom';

const BikeListings = () => {
  const [bikes, setBikes] = useState([]);
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');

  useEffect(() => {
    const fetchBikes = async () => {
      try {
        const res = await axios.get('/bikes', { params: { brand, model } });
        setBikes(res.data);
      } catch (err) {
        console.error('Error fetching bikes:', err.message);
      }
    };
    fetchBikes();
  }, [brand, model]);

  const handleSearch = async () => {
    try {
      const res = await axios.get('/bikes', { params: { brand, model } });
      setBikes(res.data);
    } catch (err) {
      console.error('Error searching bikes:', err.message);
    }
  };

  return (
    <>
      <h2>All Bike Listings</h2>
      <div className="mb-3 d-flex flex-column flex-sm-row gap-2">
        <input
          placeholder="Brand"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          className="form-control"
        />
        <input
          placeholder="Model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          className="form-control"
        />
        <button className="btn btn-secondary" onClick={handleSearch}>
          Search
        </button>
      </div>

      <div className="row">
        {bikes.map((b) => (
          <div className="col-12 col-sm-6 col-md-4 mb-4" key={b._id}>
            <Link
              to={`/bike/${b._id}`}
              className="card h-100 text-decoration-none text-dark shadow-sm"
            >
              <img
                src={b.imageUrl}
                className="card-img-top"
                alt={b.model}
                style={{ height: '160px', objectFit: 'cover' }}
              />
              <div className="card-body py-2 px-3">
                <h6 className="mb-1">{b.brand} {b.model}</h6>
                <p className="fw-bold mb-1">₹{b.price.toLocaleString("en-IN")}</p>
                <p className="text-muted mb-1 small">📍 {b.location}</p>
                <p className="text-muted small">🛠️ Year: {b.year}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default BikeListings;
