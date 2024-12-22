import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} IzharUllah. All rights reserved.
        </p>
        <div className="mt-4">
          <a
            href="https://wa.me/923039403936"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-500 mx-4"
          >
            WhatsApp
          </a>
          |
          <a
            href="mailto:ixharkhan9@gmail.com"
            className="text-blue-400 hover:text-blue-500 mx-4"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
