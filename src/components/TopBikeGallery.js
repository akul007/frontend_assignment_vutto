import React from 'react';
import '../styles/TopBikeGallery.css';
import bike1 from '../assets/topBikes/Bike1.jpg';
import bike2 from '../assets/topBikes/Bike2.jpg';
import bike3 from '../assets/topBikes/Bike3.jpg';
import bike4 from '../assets/topBikes/Bike4.jpg';
import bike5 from '../assets/topBikes/Bike5.jpg';
import bike6 from '../assets/topBikes/Bike6.jpg';
import bike7 from '../assets/topBikes/Bike7.jpg';
import bike8 from '../assets/topBikes/Bike8.jpg';

const bikes = [bike1, bike2, bike3, bike4, bike5, bike6,bike7,bike8];

const TopBikeGallery = () => (
  <div className="bike-gallery">
    {bikes.map((src, index) => (
      <div className="bike-img-wrapper" key={index}>
        <img src={src} alt={`bike-${index}`} className="bike-img" />
      </div>
    ))}
  </div>
);

export default TopBikeGallery;
