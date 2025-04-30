
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HowItWorks = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-[72px]">
        <div className="container max-w-6xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-midnight mb-10 text-center">How It Works</h1>
          
          {/* Timeline */}
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute h-full w-0.5 bg-royal-blue left-9 ml-px"></div>
              
              {/* Step 1 */}
              <div className="relative flex items-start mb-16">
                <div className="flex items-center justify-center w-20 h-20 bg-royal-blue text-white rounded-full text-2xl font-bold z-10">1</div>
                <div className="ml-8 pt-4">
                  <h3 className="text-2xl font-bold text-midnight mb-2">Initial Discovery Call</h3>
                  <p className="text-lg">We'll discuss your financing needs, property details, and investment goals to understand your specific situation.</p>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="relative flex items-start mb-16">
                <div className="flex items-center justify-center w-20 h-20 bg-royal-blue text-white rounded-full text-2xl font-bold z-10">2</div>
                <div className="ml-8 pt-4">
                  <h3 className="text-2xl font-bold text-midnight mb-2">Document Collection</h3>
                  <p className="text-lg">We'll gather all necessary documentation to prepare your application and ensure a smooth submission process.</p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="relative flex items-start mb-16">
                <div className="flex items-center justify-center w-20 h-20 bg-royal-blue text-white rounded-full text-2xl font-bold z-10">3</div>
                <div className="ml-8 pt-4">
                  <h3 className="text-2xl font-bold text-midnight mb-2">Term Shopping</h3>
                  <p className="text-lg">We'll shop your loan to multiple lenders to secure the best rates and terms for your specific situation.</p>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="relative flex items-start">
                <div className="flex items-center justify-center w-20 h-20 bg-royal-blue text-white rounded-full text-2xl font-bold z-10">4</div>
                <div className="ml-8 pt-4">
                  <h3 className="text-2xl font-bold text-midnight mb-2">Closing & Servicing</h3>
                  <p className="text-lg">We'll guide you through the closing process and ensure a smooth transition to loan servicing.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA Banner */}
          <div className="mt-16 bg-midnight text-white rounded-lg p-10 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to start?</h3>
            <a href="/get-a-quote" className="btn-primary inline-block">Get a Quote</a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorks;
