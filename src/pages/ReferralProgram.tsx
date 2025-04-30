
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ReferralProgram = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    referralType: '',
    comments: '',
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Referral form submitted:', formData);
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      referralType: '',
      comments: '',
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-[72px]">
        {/* Hero Section */}
        <div className="bg-midnight text-white py-16 px-4">
          <div className="container max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Earn Lifetime Referral Fees</h1>
            <p className="text-xl max-w-2xl mx-auto">Join our referral program and earn substantial fees for every client you refer to Hero Mortgages.</p>
          </div>
        </div>
        
        <div className="container max-w-6xl mx-auto px-4 py-16">
          {/* Payout Table */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-midnight mb-6 text-center">Referral Fee Structure</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-midnight text-white">
                    <th className="px-6 py-4 text-left">Deal Size</th>
                    <th className="px-6 py-4 text-left">Payout</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4">&lt; $500k</td>
                    <td className="px-6 py-4 font-bold">$500</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-light-grey">
                    <td className="px-6 py-4">$500k–$1M</td>
                    <td className="px-6 py-4 font-bold">$750</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4">$1M–$2M</td>
                    <td className="px-6 py-4 font-bold">$1,500</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-light-grey">
                    <td className="px-6 py-4">$2M+</td>
                    <td className="px-6 py-4 font-bold">$2,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Referral Form */}
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-midnight mb-6">Submit a Referral</h2>
            
            {isSubmitted ? (
              <div className="bg-green-100 text-green-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Thank you for your referral!</h3>
                <p>We'll reach out to your contact and keep you updated on the progress.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 bg-light-grey p-8 rounded-lg">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
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
                    Your Email
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
                    Your Phone
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
                  <label htmlFor="referralType" className="block text-sm font-medium text-gray-700 mb-1">
                    Referral Type
                  </label>
                  <select
                    id="referralType"
                    name="referralType"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-royal-blue focus:border-royal-blue"
                    value={formData.referralType}
                    onChange={handleChange}
                  >
                    <option value="">Select Type</option>
                    <option value="rental">Rental Property</option>
                    <option value="fixAndFlip">Fix and Flip</option>
                    <option value="portfolio">Portfolio</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="comments" className="block text-sm font-medium text-gray-700 mb-1">
                    Additional Information
                  </label>
                  <textarea
                    id="comments"
                    name="comments"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-royal-blue focus:border-royal-blue"
                    value={formData.comments}
                    onChange={handleChange}
                    placeholder="Please include referral contact information and any details about the deal"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="btn-primary"
                >
                  Submit Referral
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ReferralProgram;
