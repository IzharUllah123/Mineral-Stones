import React from 'react';
import backgroundImage from '../images/background3.jpg'; // Replace with your image path

const Contact = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center p-6"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-white bg-opacity-90 p-8 rounded-md max-w-md w-full">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">WhatsApp</h3>
          <a
            href="https://wa.me/923109797759"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            +923109797759
          </a>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Email</h3>
          <a
            href="mailto:izatuaf@gmail.com"
            className="text-blue-500 hover:underline"
          >
            izatuaf@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
