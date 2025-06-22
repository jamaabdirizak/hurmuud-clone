import React from 'react';
import call_icon from '../assets/call.png';
import data_Icon from '../assets/data.png';
import sms_Icon from '../assets/sms.png';

const productData = [
  { id: 1, title: 'Voice Calls', icon: call_icon },
  { id: 3, title: 'SMS Packs', icon: sms_Icon },
  { id: 2, title: 'Data Bundles', icon: data_Icon },
  { id: 4, title: 'SMS Packs', icon: sms_Icon },
  { id: 5, title: 'SMS Packs', icon: sms_Icon },
  { id: 6, title: 'SMS Packs', icon: sms_Icon },
  { id: 7, title: 'SMS Packs', icon: sms_Icon },
  { id: 8, title: 'SMS Packs', icon: sms_Icon },
];

const Products = () => {
  return (
    <section className="py-16 sm:py-20 bg-gray-50 m-8">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Our Customers’ Favourite Products
          </h1>
          <p className="text-gray-600 text-lg sm:text-xl">
            Here are some of our favorite personal products & services.
          </p>
        </div>

        {/* --- Product Cards --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {productData.map((product) => (
            <ProductCard key={product.id} icon={product.icon} title={product.title} />
          ))}
        </div>    
      </div>
    </section>
  );
};

const ProductCard = ({ icon, title }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg flex items-center gap-6 transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shrink-0">
        <img src={icon} alt={`${title} icon`} className="w-6 h-6" />
      </div>
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 tracking-wide">
        {title}
      </h2>
    </div>
  );
};

export default Products;