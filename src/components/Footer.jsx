import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between px-6">
        <div className="mb-6">
          <h2 className="text-xl font-mono text-[#00419D] mb-4">About Us</h2>
          <ul>
            <li><Link to="/" className="text-gray-600 hover:text-gray-900">ABOUT US</Link></li>
            <li><Link to="/" className="text-gray-600 hover:text-gray-900">CAREERS</Link></li>
          </ul>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-mono text-[#00419D] mb-4">TEX IRAQ</h2>
          <ul>
            <li><Link to="/services" className="text-gray-600 hover:text-gray-900">Services</Link></li>
            <li><Link to="/about" className="text-gray-600 hover:text-gray-900">About Us</Link></li>
            <li><Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact Us</Link></li>
          </ul>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-mono text-[#00419D] mb-4">Help</h2>
          <ul>
            <li><Link to="/" className="text-gray-600 hover:text-gray-900">PRIVACY AND POLICY</Link></li>
            <li><Link to="/" className="text-gray-600 hover:text-gray-900">TERMS AND CONDITIONS</Link></li>
          </ul>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-mono text-[#00419D] mb-4">Follow us</h2>
          <ul className="flex space-x-4">
            <li><Link to="/" className="text-gray-600 hover:text-gray-900"><i className="fab fa-linkedin"></i></Link></li>
            <li><Link to="/" className="text-gray-600 hover:text-gray-900"><i className="fab fa-facebook"></i></Link></li>
            <li><Link to="/" className="text-gray-600 hover:text-gray-900"><i className="fab fa-instagram"></i></Link></li>
            <li><Link to="/" className="text-gray-600 hover:text-gray-900"><i className="fab fa-twitter"></i></Link></li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8">
        <p className="text-gray-600">&copy; 2024 Tex Iraq. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
