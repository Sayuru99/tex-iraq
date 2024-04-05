import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between px-6">
        <div className="mb-6">
          <h2 className="text-xl font-mono text-[/00419D] mb-4">About Us</h2>
          <ul>
            <li><a href="/" className="text-gray-600 hover:text-gray-900">ABOUT US</a></li>
            <li><a href="/" className="text-gray-600 hover:text-gray-900">CAREERS</a></li>
          </ul>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-mono text-[/00419D] mb-4">TEX IRAQ</h2>
          <ul>
            <li><a href="/" className="text-gray-600 hover:text-gray-900">CORPORATIONS</a></li>
            <li><a href="/" className="text-gray-600 hover:text-gray-900">BRANDS</a></li>
            <li><a href="/" className="text-gray-600 hover:text-gray-900">KEY MANAGERS</a></li>
            <li><a href="/" className="text-gray-600 hover:text-gray-900">CONTACT US</a></li>
          </ul>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-mono text-[/00419D] mb-4">Help</h2>
          <ul>
            <li><a href="/" className="text-gray-600 hover:text-gray-900">PRIVACY AND POLICY</a></li>
            <li><a href="/" className="text-gray-600 hover:text-gray-900">TERMS AND CONDITIONS</a></li>
          </ul>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-mono text-[/00419D] mb-4">Follow us</h2>
          <ul className="flex space-x-4">
            <li><a href="/" className="text-gray-600 hover:text-gray-900"><i className="fab fa-linkedin"></i></a></li>
            <li><a href="/" className="text-gray-600 hover:text-gray-900"><i className="fab fa-facebook"></i></a></li>
            <li><a href="/" className="text-gray-600 hover:text-gray-900"><i className="fab fa-instagram"></i></a></li>
            <li><a href="/" className="text-gray-600 hover:text-gray-900"><i className="fab fa-twitter"></i></a></li>
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
