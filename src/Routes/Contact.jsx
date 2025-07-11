import React, { useState } from 'react'; // Import useState

const Contact = () => {
  const [submissionStatus, setSubmissionStatus] = useState(null); // State for submission feedback
  const [submissionMessage, setSubmissionMessage] = useState(''); // State for submission message

  const onSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    setSubmissionStatus('submitting'); // Set status to submitting
    setSubmissionMessage('Sending your message...');

    const formData = new FormData(event.target);
    // IMPORTANT: Replace "YOUR_ACCESS_KEY_HERE" with your actual Web3Forms Access Key
    formData.append("access_key", "9ff34857-466e-4cbd-94df-5637307c4124");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((response) => response.json()); // Use response.json() to parse the response

      if (res.success) {
        setSubmissionStatus('success');
        setSubmissionMessage('Message sent successfully!');
        event.target.reset(); // Clear the form fields
      } else {
        console.error("Web3Forms submission error:", res);
        setSubmissionStatus('error');
        setSubmissionMessage('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error("Network or API error:", error);
      setSubmissionStatus('error');
      setSubmissionMessage('An error occurred. Please check your internet connection and try again.');
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 py-12 bg-gray-50">
      <h1 className="font-semibold text-3xl md:text-4xl pb-4 pt-20 text-gray-800">Contact Us</h1>
      
      <form onSubmit={onSubmit} className="bg-white shadow-md rounded-lg p-8 w-full max-w-xl space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Contact Form</h2>

          <label htmlFor="name" className="block text-gray-600 mb-1">Full Name</label>
          <input
            id="name"
            type="text"
            name="name" // Add name attribute
            placeholder="Enter your name"
            required
            className="w-full border border-gray-300 rounded px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <label htmlFor="email" className="block text-gray-600 mb-1">Email</label>
          <input
            id="email"
            type="email"
            name="email" // Add name attribute
            placeholder="Enter your email"
            required
            className="w-full border border-gray-300 rounded px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <label htmlFor="message" className="block text-gray-600 mb-1">Message</label>
          <textarea
            id="message"
            name="message" // Add name attribute
            placeholder="Your message..."
            rows="5"
            required
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button 
          type="submit" 
          className="bg-blue-600 text-white font-semibold py-3 px-6 rounded hover:bg-blue-700 transition"
          disabled={submissionStatus === 'submitting'} // Disable button during submission
        >
          {submissionStatus === 'submitting' ? 'Sending...' : 'Send Message'}
        </button>

        {submissionStatus && ( // Display submission status messages
          <p className={`mt-4 text-center ${
            submissionStatus === 'success' ? 'text-green-600' : 'text-red-600'
          }`}>
            {submissionMessage}
          </p>
        )}
      </form>
    </main>
  );
};

export default Contact;