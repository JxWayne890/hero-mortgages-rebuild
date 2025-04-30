
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const GetAQuote = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-[72px]">
        <div className="container max-w-6xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-midnight mb-6">Get a Quote</h1>
          <p className="text-lg mb-10 max-w-3xl">
            Choose the scenario that matches your deal and we'll send tailored terms in minutes.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Rental Quote */}
            <div className="border border-gray-200 rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
              <div className="bg-midnight text-white p-6">
                <h2 className="text-2xl font-bold">Rental Quote</h2>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <p className="mb-6 flex-grow">Get a quote for your rental property financing needs.</p>
                <a 
                  href="https://timothyhero.wufoo.com/forms/rental-quote/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary block text-center mt-auto"
                >
                  Request Quote
                </a>
              </div>
            </div>
            
            {/* Card 2: Fix & Flip Quote */}
            <div className="border border-gray-200 rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
              <div className="bg-midnight text-white p-6">
                <h2 className="text-2xl font-bold">Fix & Flip Quote</h2>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <p className="mb-6 flex-grow">Get financing for your fix and flip investment project.</p>
                <a 
                  href="https://timothyhero.wufoo.com/forms/fix-flip-quote/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary block text-center mt-auto"
                >
                  Request Quote
                </a>
              </div>
            </div>
            
            {/* Card 3: Portfolio Quote */}
            <div className="border border-gray-200 rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
              <div className="bg-midnight text-white p-6">
                <h2 className="text-2xl font-bold">Portfolio Quote</h2>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <p className="mb-6 flex-grow">Get tailored financing solutions for your entire property portfolio.</p>
                <a 
                  href="https://timothyhero.wufoo.com/forms/portfolio-quote/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary block text-center mt-auto"
                >
                  Request Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GetAQuote;
