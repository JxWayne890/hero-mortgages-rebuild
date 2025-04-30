
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    honeypot: '' // Honeypot field to catch bots
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // If honeypot field is filled, it's likely a bot
    if (formData.honeypot) {
      console.log('Bot submission detected');
      return;
    }
    
    // In a real implementation, you would send the form data to a server here
    console.log('Form submitted:', formData);
    
    // Show success message
    setIsSubmitted(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      honeypot: ''
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-[72px]">
        <div className="container max-w-6xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-midnight mb-10 text-center">Contact Us</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              {isSubmitted ? (
                <div className="bg-green-100 text-green-800 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">Thanks for reaching out!</h3>
                  <p>Expect a response within one business day.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-royal-blue focus:border-royal-blue"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-royal-blue focus:border-royal-blue"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-royal-blue focus:border-royal-blue"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-royal-blue focus:border-royal-blue"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  
                  {/* Honeypot field - hidden from regular users but bots will fill it */}
                  <div className="hidden">
                    <input
                      type="text"
                      name="honeypot"
                      value={formData.honeypot}
                      onChange={handleChange}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="btn-primary"
                  >
                    Submit
                  </button>
                </form>
              )}
            </div>
            
            {/* Calendly Widget */}
            <div className="bg-light-grey rounded-lg p-6">
              <h2 className="text-2xl font-bold text-midnight mb-4">Schedule a Call</h2>
              <p className="mb-6">Prefer to talk directly? Schedule a call with our team using the calendar below.</p>
              
              <div className="aspect-video bg-white rounded border border-gray-200 flex items-center justify-center">
                <div className="text-center p-8">
                  <p className="text-xl font-medium text-midnight mb-4">Calendly Widget</p>
                  <p className="text-gray-500">To be replaced with actual Calendly embed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
