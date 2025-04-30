
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const WhyUseBroker = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-[72px]">
        <div className="container max-w-6xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-midnight mb-10 text-center">Why Use a Broker?</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <p>
                  My clients tell me repeatedly that they turn to me for financing because I save them money, time, and stress. I work for them. Not the lender. My job is to shop, get the best terms, and go to bat on their behalf.
                </p>
                <p>
                  Beyond saving money, I save borrowers tremendous time. I find and navigate the best lender's process. I collect and organize the documents. I maintain all the system logins. I answer phone calls and emails quickly. I make the process easy.
                </p>
                <p>
                  Direct lenders are great (we work with them!). However, working with a broker allows you to be matched with one or several lenders to solve your financing problems. I think of brokers as the Amazon of mortgages. We access numerous lenders and products through one relationship.
                </p>
                <p>
                  Most importantly, brokers specialize based on client type or property type. I've chosen to focus on DSCR investment property financing. This specialization matters! You want someone who does this every day, who focuses on keeping abreast of all the rates and terms.
                </p>
                <p>
                  I deeply care about my clients and their success. I have been told my MBA in finance and years working in corporate finance strengthen my ability to analyze deals and anticipate lender questions. I certainly hope they're right!
                </p>
                <p>
                  I enjoy sitting down with client's portfolios or planned acquisitions and helping them solve bigger strategic issues or financing problems.
                </p>
              </div>
            </div>
            
            {/* Testimonials Sidebar */}
            <div className="bg-light-grey p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-midnight">What Clients Say</h3>
              
              <div className="space-y-8">
                <div className="bg-white p-6 rounded shadow">
                  <p className="italic mb-2">"Timothy was fantastic to work with. Professional, responsive, and got me a great rate on my investment property financing."</p>
                  <p className="font-bold">- John D.</p>
                </div>
                
                <div className="bg-white p-6 rounded shadow">
                  <p className="italic mb-2">"I've worked with several brokers in the past, but Hero Mortgages provided the most seamless experience by far. Highly recommend!"</p>
                  <p className="font-bold">- Sarah M.</p>
                </div>
                
                <div className="bg-white p-6 rounded shadow">
                  <p className="italic mb-2">"Timothy found us financing options that we didn't know existed. His expertise saved us thousands on our portfolio refinance."</p>
                  <p className="font-bold">- Michael T.</p>
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

export default WhyUseBroker;
