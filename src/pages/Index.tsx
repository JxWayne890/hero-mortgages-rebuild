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
          <div className="absolute inset-0 bg-midnight/50"></div>
        </div>

        {/* Header Component */}
        <Header />

        {/* Hero Content */}
        <div className="relative z-10 space-y-6 px-6 max-w-4xl mx-auto my-0">
          <h2 className="tracking-[0.25em] text-sm md:text-base uppercase font-light">
            <span className="relative">
              OVER <span className="text-royal-blue">350</span> LOANS BROKERED
            </span>
          </h2>

          <div className="border-t border-b border-white/20 py-8 my-4">
            <h1 className="text-5xl font-bold tracking-wider my-0 md:text-5xl">DSCR FINANCING</h1>
          </div>

          <p className="max-w-xl mx-auto text-base tracking-wide md:text-sm my-0">
            UP TO 30-YEAR FIXED · SOFT CREDIT PULL · NOT ON CREDIT · LOW DOC
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-6"></div>

          {/* Featured Logos */}
          <div className="pt-16">
            <p className="uppercase text-sm mb-4 tracking-wider text-white text-center">FEATURED ON</p>
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 max-w-5xl mx-auto opacity-90">
              <a 
                href="https://www.wealthandfreedomnexus.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 flex items-center justify-center h-12 transition-transform hover:scale-105"
              >
                <img 
                  src="https://www.wealthandfreedomnexus.com/_imagecache/Wealth%20_%20Freedom%20Nexus%20logo.png" 
                  alt="Wealth & Freedom Nexus" 
                  className="h-full max-h-10 w-auto object-contain"
                />
              </a>

              <a 
                href="https://lady-landlords.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 flex items-center justify-center h-12 transition-transform hover:scale-105"
              >
                <img 
                  src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/20PxflUd1jJhN6BCN0Kk/media/651fd7cd3fadbf4c3e65a487.webp" 
                  alt="Lady Landlords" 
                  className="h-full max-h-10 w-auto object-contain"
                />
              </a>

              <a 
                href="https://www.mpamag.com/us" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 flex items-center justify-center h-12 transition-transform hover:scale-105"
              >
                <img 
                  src="https://www.mpamag.com/images/logo_us.svg" 
                  alt="MPA" 
                  className="h-full max-h-10 w-auto object-contain"
                />
              </a>

              <a 
                href="https://www.biggerpockets.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 flex items-center justify-center h-12 transition-transform hover:scale-105"
              >
                <img 
                  src="https://bpimg.biggerpockets.com/assets/logo/logo@2x-41cb3d87079ac1ef4371ac91cbb08387cebf25d485e016645a632fa3709b6935.png" 
                  alt="BiggerPockets" 
                  className="h-full max-h-10 w-auto object-contain"
                />
              </a>
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
            "sameAs": [
              "https://www.facebook.com/heromortgages/",
              "https://www.linkedin.com/company/heromortgages/"
            ]
          })}
        </script>
      </section>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default Index;
