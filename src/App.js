import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import MyListings from './pages/MyListings';
import BikeDetails from './pages/BikeDetails';
import AddEditBike from './pages/AddEditBike';
import BikeListings from './pages/BikeListings';
import ProtectedRoute from './components/ProtectedRoute';

// console.log('AddEditBike:', AddEditBike); // should log: function AddEditBike() {...}
console.log('Login:', Login);
console.log('Register:', Register);
console.log('Dashboard:', Dashboard);
console.log('MyListings:', MyListings);
console.log('BikeDetails:', BikeDetails);
console.log('AddEditBike:', AddEditBike);
console.log('BikeListings:', BikeListings);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>}>
          <Route index element={<BikeListings />} />
          <Route path="my-listings" element={<MyListings />} />
          <Route path="bike/add" element={<AddEditBike />} />
          <Route path="bike/edit/:id" element={<AddEditBike />} />
          <Route path="bike/:id" element={<BikeDetails />} />
        </Route>

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
