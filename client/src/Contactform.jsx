import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    // REPLACE THESE 3 STRINGS WITH YOUR ACTUAL ID'S FROM EMAILJS DASHBOARD
    const SERVICE_ID = "service_p9dzh9y"; 
    const TEMPLATE_ID = "template_d0933jm";
    const PUBLIC_KEY = "k2mjadwYwP78G3TnN";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          console.log('SUCCESS!', result.text);
          setStatus('SUCCESS');
          setLoading(false);
          e.target.reset(); // Clear the form
      }, (error) => {
          console.log('FAILED...', error.text);
          setStatus('ERROR');
          setLoading(false);
      });
  };

  return (
    <div className="w-full max-w-lg mx-auto bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden p-8 text-left">
      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        
        {/* Name - Notice name="user_name" matches EmailJS defaults */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input 
            type="text" 
            name="user_name" 
            required 
            className="mt-1 block w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-black focus:border-black outline-none transition bg-gray-50" 
            placeholder="Your Name"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input 
            type="email" 
            name="user_email" 
            required 
            className="mt-1 block w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-black focus:border-black outline-none transition bg-gray-50" 
            placeholder="your@email.com"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Message</label>
          <textarea 
            name="message" 
            required 
            rows="4" 
            className="mt-1 block w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-black focus:border-black outline-none transition bg-gray-50" 
            placeholder="Write your message..."
          />
        </div>

        <button 
          type="submit" 
          disabled={loading} 
          className={`w-full py-3 px-4 rounded-lg text-sm font-bold text-white transition duration-150 ease-in-out ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-black hover:bg-gray-800 shadow-lg'}`}
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
      
      {status === 'SUCCESS' && (
        <div className="mt-4 p-3 bg-green-50 text-green-700 rounded text-center text-sm font-medium">
          ✅ Message Sent Successfully!
        </div>
      )}
      {status === 'ERROR' && (
        <div className="mt-4 p-3 bg-red-50 text-red-700 rounded text-center text-sm font-medium">
          ❌ Failed to send. Please try again.
        </div>
      )}
    </div>
  );
};

export default ContactForm;