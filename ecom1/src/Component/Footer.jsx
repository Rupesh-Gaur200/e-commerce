
import React from 'react';
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
     
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0 lg:mb-0">
          <h3 className="text-2xl font-bold mb-4 ml-2">Contact Us</h3>
          <p className='ml-2'>Email: contact@example.com</p>
          <p className='ml-2'>Phone: +1 123-456-7890</p>
        </div>


        <div className="w-full md:w-1/2 lg:w-1/4 mt-4 md:mt-0 lg:mt-0">
          <h3 className="text-2xl font-bold mb-4 ml-2">Links</h3>
          <ul className='ml-2'>
            <li><a href="/">Home</a></li>
            <li><a href="/">Products</a></li>
            <li><a href="/Deliver">Save Address</a></li>
            <li><a href="/Contact">Connect with Us</a></li>
          </ul>
        </div>


        <div className="w-full md:w-1/2 lg:w-1/4 mt-4 md:mt-0 lg:mt-0">
          <h3 className="text-2xl font-bold mb-4 ml-2">Follow Us</h3>
          <p className='ml-2'>Stay connected on social media</p>
         
  
        </div>
      </div>
    </footer>
  );
}

export default Footer;

