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
          
          <div className="max-w-5xl mx-auto my-16">
            {/* US Lending Map Image */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://i0.wp.com/timothyhero.com/wp-content/uploads/2024/09/MapChart_Map.png?w=1286&ssl=1" 
                alt="Lending Map - States we can and cannot lend in" 
                className="w-full h-auto object-contain"
              />
            </div>
            <p className="text-center text-sm mt-4 text-midnight/80">
              Green = Can Lend · Red = Cannot Lend
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LendingLocations;
