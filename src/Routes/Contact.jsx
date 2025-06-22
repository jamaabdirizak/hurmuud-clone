import React from 'react';

const Contact = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 py-12 bg-gray-50">
      <h1 className="font-semibold text-3xl md:text-4xl pb-4 pt-20 text-gray-800">Contact Us</h1>
      
      <form className="bg-white shadow-md rounded-lg p-8 w-full max-w-xl space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Contact Form</h2>

          <label htmlFor="name" className="block text-gray-600 mb-1">Full Name</label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            required
            className="w-full border border-gray-300 rounded px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <label htmlFor="email" className="block text-gray-600 mb-1">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            required
            className="w-full border border-gray-300 rounded px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <label htmlFor="message" className="block text-gray-600 mb-1">Message</label>
          <textarea
            id="message"
            placeholder="Your message..."
            rows="5"
            required
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button type="submit" className="bg-blue-600 text-white font-semibold py-3 px-6 rounded hover:bg-blue-700 transition">
          Send Message
        </button>
      </form>
    </main>
  );
};

export default Contact;