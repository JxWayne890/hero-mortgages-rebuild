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
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-midnight/50 to-transparent"></div>
        </div>

        {/* Header Component */}
        <Header />

        {/* Hero Content */}
        <div className="relative z-10 px-6 py-12 max-w-3xl mx-auto text-center text-white">
          <h2 className="text-sm md:text-base tracking-widest uppercase font-light mb-6">
            OVER{' '}
            <span className="inline-block px-2 py-0.5 border border-green-400 text-green-400 rounded-full">
              350
            </span>{' '}
            LOANS BROKERED
          </h2>

          <div className="border border-white/40 rounded-md px-8 py-6 backdrop-blur-sm shadow-md">
            <h1 className="text-4xl md:text-6xl font-light tracking-wide leading-tight mb-4">
              DSCR <span className="font-semibold">FINANCING</span>
            </h1>
            <p className="text-base md:text-lg tracking-wide text-white/80">
              UP TO 30-YEAR FIXED · SOFT CREDIT PULL · NOT ON CREDIT · LOW DOC
            </p>
          </div>

          {/* Featured Logos */}
          <div className="pt-16">
            <p className="uppercase text-sm mb-4 tracking-wider text-white text-center">FEATURED ON</p>
            
            <div className="backdrop-blur-sm bg-white/10 rounded-xl px-6 py-4 shadow-lg">
              <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-4 max-w-6xl mx-auto">

                <a href="https://www.wealthandfreedomnexus.com/" target="_blank" rel="noopener noreferrer">
                  <img 
                    src="https://www.wealthandfreedomnexus.com/_imagecache/Wealth%20_%20Freedom%20Nexus%20logo.png" 
                    alt="Wealth & Freedom Nexus" 
                    className="h-full max-h-10 w-auto max-w-[140px] object-contain hover:opacity-90 transition duration-150"
                  />
                </a>

                <a href="https://lady-landlords.com/" target="_blank" rel="noopener noreferrer">
                  <img 
                    src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/20PxflUd1jJhN6BCN0Kk/media/651fd7cd3fadbf4c3e65a487.webp" 
                    alt="Lady Landlords" 
                    className="h-full max-h-10 w-auto max-w-[140px] object-contain hover:opacity-90 transition duration-150"
                  />
                </a>

                <a href="https://www.mpamag.com/us" target="_blank" rel="noopener noreferrer">
                  <img 
                    src="https://www.mpamag.com/images/logo_us.svg" 
                    alt="MPA" 
                    className="h-full max-h-10 w-auto max-w-[140px] object-contain hover:opacity-90 transition duration-150"
                  />
                </a>

                <a href="https://www.biggerpockets.com/" target="_blank" rel="noopener noreferrer">
                  <img 
                    src="https://bpimg.biggerpockets.com/assets/logo/logo@2x-41cb3d87079ac1ef4371ac91cbb08387cebf25d485e016645a632fa3709b6935.png" 
                    alt="BiggerPockets" 
                    className="h-full max-h-10 w-auto max-w-[140px] object-contain hover:opacity-90 transition duration-150"
                  />
                </a>

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
