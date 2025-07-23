import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../api/axios';

const BikeDetails = () => {
  const { id } = useParams();
  const [bike, setBike] = useState(null);

  useEffect(() => {
    const fetchBike = async () => {
      try {
        const res = await axios.get(`/bikes/${id}`);
        setBike(res.data);
      } catch (err) {
        console.error('Failed to fetch bike details:', err.message);
      }
    };
    fetchBike();
  }, [id]);

  if (!bike) return <p>Loading...</p>;

  return (
    <div className="container mt-5">
      <h2>{bike.name}</h2>
      <img src={bike.imageUrl} alt={bike.name} className="img-fluid mb-3" />
      <ul className="list-group">
        <li className="list-group-item">
          <strong>Brand:</strong> {bike.brand}
        </li>
        <li className="list-group-item">
          <strong>Type:</strong> {bike.type}
        </li>
        <li className="list-group-item">
          <strong>Year:</strong> {bike.year}
        </li>
        <li className="list-group-item">
          <strong>Price:</strong> ₹{bike.price.toLocaleString('en-IN')}
        </li>
        <li className="list-group-item">
          <strong>KMs Driven:</strong> {bike.kilometers_driven}
        </li>
        <li className="list-group-item">
          <strong>Location:</strong> {bike.location}
        </li>
      </ul>
    </div>
  );
};

export default BikeDetails;
