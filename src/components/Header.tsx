import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const leftLinks = [
    { title: 'HOME', path: '/' },
    { title: 'GET A QUOTE', path: '/get-a-quote' },
    { title: 'LENDING LOCATIONS', path: '/lending-locations' },
    { title: 'FAQ', path: '/faq' },
    { title: 'BLOG', path: '/blog' },
  ];

  const rightLinks = [
    { title: 'WHY USE A BROKER?', path: '/why-use-a-broker' },
    { title: 'HOW IT WORKS', path: '/how-it-works' },
    { title: 'CONTACT', path: '/contact' },
    { title: 'REFERRAL PROGRAM', path: '/referral-program' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 h-[72px] z-50 px-4 md:px-8">
      <div className="absolute inset-0 bg-gradient-to-b from-midnight/70 to-transparent backdrop-blur-sm" />
      
      <div className="relative max-w-7xl mx-auto h-full flex items-center justify-between z-10">
        
        {/* Desktop Nav - Left Links */}
        <nav className="hidden md:flex items-center gap-3">
          {leftLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-white text-xs font-bold px-3 py-2 transition-colors ${
                  isActive ? 'text-royal-blue' : 'hover:text-royal-blue'
                }`
              }
            >
              {link.title}
            </NavLink>
          ))}
        </nav>

        {/* Logo - Centered */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-[64px]">
          <NavLink to="/" className="block h-full">
            <img
              src="https://i0.wp.com/timothyhero.com/wp-content/uploads/2021/10/imageedit_145_7304928946.png?resize=768%2C553&ssl=1"
              alt="Hero Mortgages LLC Logo"
              className="h-full w-auto object-contain"
            />
          </NavLink>
        </div>

        {/* Desktop Nav - Right Links */}
        <nav className="hidden md:flex items-center gap-3 ml-auto">
          {rightLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-white text-xs font-bold px-3 py-2 transition-colors ${
                  isActive ? 'text-royal-blue' : 'hover:text-royal-blue'
                }`
              }
            >
              {link.title}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white ml-auto z-50"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden fixed inset-0 top-[72px] bg-midnight/95 z-40 flex flex-col items-center pt-10">
            {[...leftLinks, ...rightLinks].map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-white text-base font-medium py-4 hover:text-royal-blue transition-colors ${
                    isActive ? 'text-royal-blue' : ''
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {link.title}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
