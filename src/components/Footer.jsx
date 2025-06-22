import React from 'react';
import logo from '../assets/logo.png';
import { FaFacebook , FaTwitter , FaLinkedin , FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
 <footer className="p-6 bg-gray-900">
  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-y-6">
    <img src={logo} alt="Company Logo" className="w-24 h-auto" />

    <div className="text-white">
      <p className="font-semibold">Subscribe to our Newsletter</p>
      <p className="text-sm">Get all the latest information, Sales and Offers.</p>
    </div>

      <div className='flex gap-0.5'>
    <form className="flex flex-col sm:flex-row items-stretch gap-2 w-full sm:w-auto">
      <input
        type="email"
        id="Email"
        className="flex-1 bg-gray-800 text-white rounded border-blue-800 shadow-sm text-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="you@example.com"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition"
      >
        Subscribe
      </button>
    </form>
    </div>
  </div>
      <section className="text-white bg-gray-900 px-6 py-10">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
    
    <div>
      <p className="font-semibold mb-2">Contact Info</p>
      <p className="text-sm">Phone:</p>
      <p className="text-sm">Call Free 141 | 657950</p>
      <p className="text-sm mt-2">Email:</p>
      <p className="text-sm">support@hormuud.com</p>
    </div>

    <div>
      <p className="font-semibold mb-2">Address</p>
      <p className="text-sm">
        Hormuud Tower, Airport Road,<br />
        Waberi, Mogadishu, Somalia
      </p>
    </div>

    <div>
      <p className="font-semibold mb-2">Corporate</p>
      <p className="text-sm">About Us</p>
      <p className="text-sm">Press Release</p>
      <p className="text-sm">Social Responsibilities</p>
      <p className="text-sm">Customer Service</p>
      <p className="text-sm">Terms & Condition</p>
    </div>

    <div>
      <p className="font-semibold mb-2">Personal</p>
      <p className="text-sm">Prepaid</p>
      <p className="text-sm">PostPaid</p>
      <p className="text-sm">Anfac Plus</p>
      <p className="text-sm">ADSL Plus</p>
      <p className="text-sm">Offers</p>
    </div>

    <div>
      <p className="font-semibold mb-2">Business</p>
      <p className="text-sm">Mysms</p>
      <p className="text-sm">Messaging API</p>
      <p className="text-sm">Enterprise Internet</p>
      <p className="text-sm">IVR (Call Center)</p>
      <p className="text-sm">USSD Shortcodes</p>
    </div>
    
  </div>

    <hr className='w-full my-6  border-t border-gray-600' />
<div className="flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm gap-4">
  <div className="flex-grow text-center">
    <p>HURMUUD.COM &copy; All rights reserved</p>
  </div>

  {/* icons */}
  <div className='flex gap-5 text-2xl'>
    <a href="#" className='text-gray-500 rounded hover:text-blue-500'>
      <FaFacebook/>
    </a>
    <a href="#" className='text-gray-500 rounded hover:text-blue-500'>
      <FaTwitter/>
    </a>
    <a href="#" className='text-gray-500 rounded hover:text-blue-500'>
      <FaLinkedin/>
    </a>
    <a href="#" className='text-gray-500 rounded hover:text-blue-500'>
      <FaInstagram/>
    </a>
  </div>
</div>
</section>
</footer>
  );
};

export default Footer;