
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-[72px]">
        <div className="container max-w-6xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-midnight mb-10 text-center">About</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Left Column - Portrait */}
            <div className="flex justify-center">
              <div className="w-full max-w-md aspect-[3/4] bg-light-grey rounded-lg flex items-center justify-center">
                <div className="text-center p-8">
                  <p className="text-xl font-medium text-midnight">Timothy Hero Portrait</p>
                </div>
              </div>
            </div>
            
            {/* Right Column - Bio */}
            <div className="flex flex-col justify-center">
              <div className="prose prose-lg max-w-none">
                <p>
                  Timothy Hero is a specialist in DSCR investment property financing with over a decade of experience in the mortgage industry. After earning his MBA in finance, Timothy worked in corporate finance before transitioning to focus exclusively on helping real estate investors secure optimal financing for their properties.
                </p>
                <p>
                  As the founder of Hero Mortgages LLC, Timothy has brokered over 350 loans and built a reputation for finding creative financing solutions for complex investment scenarios. His analytical approach and deep understanding of lender requirements allow him to match clients with the best possible loan terms for their specific investment strategies.
                </p>
                <p>
                  Timothy is passionate about educating investors on the nuances of DSCR financing and helping them build sustainable wealth through real estate investing. When not working with clients, Timothy enjoys hiking, reading financial literature, and spending time with his family.
                </p>
              </div>
            </div>
          </div>
          
          {/* Testimonials Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-light-grey p-6 rounded-lg shadow">
              <div className="text-royal-blue text-4xl font-serif mb-4">"</div>
              <p className="italic mb-4">Working with Timothy was a game-changer for my investment strategy. His knowledge of DSCR financing options saved me thousands on my recent property acquisition.</p>
              <p className="font-bold">- Robert Johnson</p>
            </div>
            
            <div className="bg-light-grey p-6 rounded-lg shadow">
              <div className="text-royal-blue text-4xl font-serif mb-4">"</div>
              <p className="italic mb-4">Hero Mortgages found me a lender when three other brokers said my deal couldn't be done. Timothy's persistence and expertise made all the difference.</p>
              <p className="font-bold">- Jennifer Smith</p>
            </div>
            
            <div className="bg-light-grey p-6 rounded-lg shadow">
              <div className="text-royal-blue text-4xl font-serif mb-4">"</div>
              <p className="italic mb-4">I've worked with Timothy on five different properties now. His responsive communication and ability to secure great rates keep me coming back.</p>
              <p className="font-bold">- David Wilson</p>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="bg-midnight text-white rounded-lg p-10 text-center">
            <h3 className="text-2xl font-bold mb-4">Let's build something together</h3>
            <NavLink to="/contact" className="btn-primary inline-block">Contact Us</NavLink>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
