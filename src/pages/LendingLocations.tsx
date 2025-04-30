
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const LendingLocations = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-[72px]">
        <div className="container max-w-6xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-midnight mb-6 text-center">Lending Locations</h1>
          
          <div className="max-w-3xl mx-auto my-16">
            {/* Placeholder for US Map with highlighted states */}
            <div className="aspect-[4/3] bg-light-grey rounded-lg flex items-center justify-center">
              <div className="text-center p-8">
                <p className="text-xl font-medium text-midnight mb-4">U.S. Map Coming Soon</p>
                <p>All lending states will be highlighted in blue</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LendingLocations;
