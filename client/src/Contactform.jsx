import { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      await axios.post('https://portfolio-jzb1.onrender.com/contact', formData);
      setStatus('SUCCESS');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error(error);
      setStatus('ERROR');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden p-8 text-left">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input 
            type="text" name="name" required
            value={formData.name} onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-black focus:border-black outline-none transition bg-gray-50"
            placeholder="Sai Harshith"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input 
            type="email" name="email" required
            value={formData.email} onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-black focus:border-black outline-none transition bg-gray-50"
            placeholder="sai@example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Message</label>
          <textarea 
            name="message" required rows="4"
            value={formData.message} onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-black focus:border-black outline-none transition bg-gray-50"
            placeholder="I'd love to discuss a project..."
          />
        </div>

        <button 
          type="submit" 
          disabled={loading}
          className={`w-full py-3 px-4 rounded-lg text-sm font-bold text-white transition duration-150 ease-in-out
          ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-black hover:bg-gray-800 shadow-lg hover:shadow-xl'}`}
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      {status === 'SUCCESS' && (
        <div className="mt-4 p-3 bg-green-50 text-green-700 rounded text-center text-sm">
          ✅ Message sent successfully!
        </div>
      )}
      {status === 'ERROR' && (
        <div className="mt-4 p-3 bg-red-50 text-red-700 rounded text-center text-sm">
          ❌ Failed to send message.
        </div>
      )}
    </div>
  );
};

export default ContactForm;