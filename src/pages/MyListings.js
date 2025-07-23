// src/pages/MyListings.js
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../api/axios';

const MyListings = () => {
  const [bikes, setBikes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMyBikes = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        const config = { headers: { Authorization: `Bearer ${token}` } };
        const res = await axios.get('/bikes/user', config);
        setBikes(res.data);
      } catch (err) {
        console.error('Failed to fetch your listings:', err.message);
      }
    };

    fetchMyBikes();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this listing?')) return;
    try {
      const token = localStorage.getItem('accessToken');
      const config = { headers: { Authorization: `Bearer ${token}` } };
      await axios.delete(`/bikes/${id}`, config);
      setBikes((prev) => prev.filter((bike) => bike._id !== id));
    } catch (err) {
      console.error('Error deleting bike:', err.message);
      alert('Failed to delete listing.');
    }
  };

  return (
    <>
      <h2>My Listings</h2>
      {bikes.length === 0 ? (
        <p>No listings found.</p>
      ) : (
        <div className="row">
          {bikes.map((bike) => (
            <div className="col-12 col-sm-6 col-md-4 mb-4" key={bike._id}>
              <div className="card h-100 shadow-sm">
                <Link to={`/bike/${bike._id}`} className="text-decoration-none text-dark">
                  <img
                    src={bike.imageUrl}
                    className="card-img-top"
                    alt={bike.model}
                    style={{ height: '160px', objectFit: 'cover' }}
                  />
                  <div className="card-body py-2 px-3">
                    <h6 className="card-title mb-1">
                      {bike.brand} {bike.model}
                    </h6>
                    <p className="fw-bold mb-1">
                      ₹{bike.price.toLocaleString('en-IN')}
                    </p>
                    <p className="text-muted mb-1 small">📍 {bike.location}</p>
                    <p className="text-muted small">🛠️ Year: {bike.year}</p>
                  </div>
                </Link>
                <div className="card-footer d-flex justify-content-between px-3 py-2">
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={() => navigate(`/bike/edit/${bike._id}`)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(bike._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default MyListings;
