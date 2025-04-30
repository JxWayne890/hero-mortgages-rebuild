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

          {/* Embedded Video */}
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg max-w-4xl mx-auto">
            <iframe
              title="How It Works Video"
              src="https://videopress.com/embed/UNNTgoWV?hd=1&cover=1&loop=0&autoPlay=1&permalink=1&muted=0&controls=1&playsinline=0&useAverageColor=0&preloadContent=metadata"
              width="100%"
              height="100%"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
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
