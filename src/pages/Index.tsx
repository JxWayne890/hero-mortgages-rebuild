
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Index = () => {
  const navigate = useNavigate();

  // Apply no-scroll class to body on mount
  useEffect(() => {
    document.body.classList.add('no-scroll');
    
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center text-white bg-cover bg-center overflow-hidden">
        {/* Image with Ken Burns effect */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/lovable-uploads/cac55364-e9ca-41e6-bfbc-41a8bdb25aa7.png" 
            alt="DSCR Financing Hero" 
            className="w-full h-full object-cover ken-burns" 
            loading="eager"
          />
          <div className="absolute inset-0 bg-midnight/40"></div> {/* Overlay for better text visibility */}
        </div>
        
        {/* Header Component */}
        <Header />
        
        {/* Hero Content */}
        <div className="relative z-10 space-y-4 px-6 max-w-4xl">
          <h2 className="tracking-widest text-sm uppercase">Over 350 Loans Brokered</h2>
          <h1 className="text-4xl md:text-6xl font-extrabold">DSCR FINANCING</h1>
          <p className="max-w-xl mx-auto text-base md:text-lg">
            Up to 30-Year Fixed · Soft Credit Pull · Not on Credit · Low Doc
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <button onClick={() => navigate('/get-a-quote')} className="btn-primary">Get a Quote</button>
            <button onClick={() => navigate('/contact')} className="btn-secondary">Contact Us</button>
          </div>

          <div className="pt-10">
            <p className="uppercase text-sm mb-4 tracking-wider">Featured On</p>
            <div className="flex flex-wrap justify-center gap-6 opacity-90">
              {/* Featured-on logos with actual names */}
              <div className="w-32 h-12 bg-white/80 rounded flex items-center justify-center p-2">
                <p className="text-xs font-bold text-gray-700">THE WEALTH & FREEDOM NEXUS</p>
              </div>
              <div className="w-32 h-12 bg-white/80 rounded flex items-center justify-center p-2">
                <p className="text-xs font-bold text-gray-700">Lady Landlords</p>
              </div>
              <div className="w-20 h-12 bg-white/80 rounded flex items-center justify-center p-2">
                <p className="text-xs font-bold text-gray-700">MPA</p>
              </div>
              <div className="w-32 h-12 bg-white/80 rounded flex items-center justify-center p-2">
                <p className="text-xs font-bold text-gray-700">BiggerPockets®</p>
              </div>
              <div className="w-32 h-12 bg-white/80 rounded flex items-center justify-center p-2">
                <p className="text-xs font-bold text-gray-700">The Real Estate Mindset</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* SEO Schema Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Hero Mortgages LLC",
            "url": "https://timothyhero.com",
            "logo": "https://i0.wp.com/timothyhero.com/wp-content/uploads/2021/10/imageedit_145_7304928946.png?resize=768%2C553&ssl=1",
            "sameAs": ["https://www.facebook.com/heromortgages/", "https://www.linkedin.com/company/heromortgages/"]
          })}
        </script>
      </section>
      <Footer />
    </div>
  );
};

export default Index;
