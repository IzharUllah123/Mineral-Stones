import React from 'react';
import backgroundImage from '../images/background1.jpg'; // Replace with your image path

const Home = () => {
  return (
    <div
      className="h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-white bg-opacity-75 p-10 rounded-md text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Mineral Stones Store</h1>
        <p className="text-lg">
          Discover a wide variety of high-quality mineral stones perfect for your needs.
        </p>
      </div>
    </div>
  );
};

export default Home;
