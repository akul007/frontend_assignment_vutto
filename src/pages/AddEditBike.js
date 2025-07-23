import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from '../api/axios';

const AddEditBike = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [bike, setBike] = useState({
    name: '',
    type: '',
    brand: '',
    model: '',
    year: '',
    price: '',
    kilometers_driven: '',
    location: '',
    imageUrl: '',
  });
  const [error, setError] = useState('');

  useEffect(() => {
    if (id) {
      axios.get(`/bikes/${id}`)
        .then(res => setBike(res.data))
        .catch(err => console.error('Failed to fetch bike:', err));
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBike(prev => ({ ...prev, [name]: value }));
  };

  const validateFields = () => {
    const yearNow = new Date().getFullYear();
    if (parseFloat(bike.price) < 5000) return 'Price must be at least ₹5000';
    if (parseFloat(bike.kilometers_driven) < 0) return 'Kilometers driven cannot be negative';
    if (parseFloat(bike.year) % 1 !== 0) return 'Year must be an integer';
    if (bike.year < yearNow - 10 || bike.year > yearNow) return `Year must be between ${yearNow - 10} and ${yearNow}`;
    return '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validateFields();
    if (validationError) return setError(validationError);

    // Convert necessary fields to numbers before sending to backend
    const payload = {
      ...bike,
      year: parseInt(bike.year),
      price: parseFloat(bike.price),
      kilometers_driven: parseFloat(bike.kilometers_driven),
    };

    console.log('📤 Final payload:', payload); // Debug

    try {
      const token = localStorage.getItem('accessToken');
      const config = { headers: { Authorization: `Bearer ${token}` } };

      if (id) {
        await axios.put(`/bikes/${id}`, payload, config);
      } else {
        await axios.post('/bikes', payload, config);
      }

      navigate('/my-listings');
    } catch (err) {
      console.error('❌ Submission error:', err?.response?.data || err.message);
      setError(err?.response?.data?.error || 'Error submitting bike data.');
    }
  };


  return (
    <div className="container mt-4">
      <h2>{id ? 'Edit' : 'Add'} Bike</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        {['name', 'type', 'brand', 'model', 'location', 'imageUrl'].map((field) => (
          <div className="mb-3" key={field}>
            <label className="form-label">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
            <input
              type="text"
              name={field}
              value={bike[field] || ''}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
        ))}
        <div className="mb-3">
          <label className="form-label">Year</label>
          <input
            type="number"
            name="year"
            value={bike.year}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Price (₹)</label>
          <input
            type="number"
            name="price"
            value={bike.price}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Kilometers Driven</label>
          <input
            type="number"
            name="kilometers_driven"
            value={bike.kilometers_driven}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {id ? 'Update Bike' : 'Add Bike'}
        </button>
      </form>
    </div>
  );
};

export default AddEditBike;
