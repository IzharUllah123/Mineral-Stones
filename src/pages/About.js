import React from 'react';
import backgroundImage from '../images/background2.jpg'; // Replace with your image path

const About = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center p-6"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-white bg-opacity-90 p-8 rounded-md max-w-2xl">
        <h2 className="text-3xl font-bold mb-6">About Us</h2>
        <p className="text-lg mb-4">
          At Mineral Stones Store, we are passionate about providing the finest mineral stones sourced from around the world. Our mission is to offer top-quality products that cater to both collectors and enthusiasts.
        </p>
        <p className="text-lg">
          With years of experience in the industry, we ensure that each stone is meticulously selected and authenticated. Customer satisfaction is our top priority, and we strive to deliver exceptional service with every purchase.
        </p>
      </div>
    </div>
  );
};

export default About;
