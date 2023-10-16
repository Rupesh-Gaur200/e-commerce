// Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 lg:w-1/4">
          <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
          <p>Email: contact@example.com</p>
          <p>Phone: +1 123-456-7890</p>
        </div>
        <div className="w-full md:w-1/3 lg:w-1/4 mt-4 md:mt-0">
          <h3 className="text-2xl font-bold mb-4">Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 lg:w-1/4 mt-4 md:mt-0">
          <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
          <p>Stay connected on social media</p>
          <div className="mt-2">
            <a href="#" className="text-2xl mr-4"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-2xl mr-4"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-2xl"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
